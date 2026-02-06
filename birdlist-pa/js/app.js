(() => {
  const STORAGE_KEYS = {
    season: "birdlist_season",
    found: {
      summer: "birdlist_found_summer",
      winter: "birdlist_found_winter",
    },
    location: {
      summer: "birdlist_location_summer",
      winter: "birdlist_location_winter",
    },
    locationDismissed: {
      summer: "birdlist_location_modal_dismissed_summer",
      winter: "birdlist_location_modal_dismissed_winter",
    },
    completionShown: {
      summer: "birdlist_completion_shown_summer",
      winter: "birdlist_completion_shown_winter",
    },
    milestones: {
      3: {
        summer: "birdlist_milestone_3_summer",
        winter: "birdlist_milestone_3_winter",
      },
      5: {
        summer: "birdlist_milestone_5_summer",
        winter: "birdlist_milestone_5_winter",
      },
      10: {
        summer: "birdlist_milestone_10_summer",
        winter: "birdlist_milestone_10_winter",
      },
    },
  };

  const SESSION_KEYS = {
    welcomeShown: "birdlist_welcome_shown",
  };

  const ANALYTICS_ID = "G-FG1T62NWK6";
  const CONSENT_KEY = "birdlist_consent";

  const SHARE_TEXT =
    "🐦 Just finished BirdList PA!\nI spotted all the birds on the checklist while exploring local parks — it was a fun, easy way to get outside and learn about birds. Highly recommend giving it a try!";

  const BASE_IDS = [
    "american_robin",
    "northern_cardinal",
    "blue_jay",
    "mourning_dove",
    "american_crow",
    "downy_woodpecker",
    "red_bellied_woodpecker",
    "mallard",
  ];

  const SEASONAL_IDS = {
    summer: ["gray_catbird", "tree_swallow"],
    winter: ["dark_eyed_junco", "white_throated_sparrow"],
  };

  const SEASON_LABELS = {
    summer: "Summer (Apr - Sep)",
    winter: "Winter (Oct - Mar)",
  };

  const state = {
    birds: [],
    birdMap: new Map(),
    season: "summer",
    activeModal: null,
    lastFocus: null,
    activeBirdId: null,
  };

  const selectors = {
    list: document.getElementById("bird-list"),
    foundCountEls: document.querySelectorAll("[data-found-count]"),
    seasonRow: document.querySelector("[data-season-row]"),
    locationRow: document.querySelector("[data-location-row]"),
    locationValue: document.querySelector("[data-location-value]"),
    locationAction: document.querySelector("[data-location-action]"),
    seasonLabel: document.querySelector("[data-season-label]"),
    seasonIcon: document.querySelector("[data-season-icon]"),
    seasonChange: document.querySelector("[data-season-change]"),
    welcomeModal: document.getElementById("welcome-modal"),
    birdModal: document.getElementById("bird-modal"),
    locationModal: document.getElementById("location-modal"),
    completionModal: document.getElementById("completion-modal"),
    shareButton: document.getElementById("share-button"),
    shareToast: document.getElementById("share-toast"),
  };

  const storage = {
    get(key, fallback) {
      try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch (error) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        // Ignore storage failures for private browsing.
      }
    },
    getJSON(key, fallback) {
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
      } catch (error) {
        return fallback;
      }
    },
    setJSON(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        // Ignore storage failures for private browsing.
      }
    },
    getSession(key) {
      try {
        return sessionStorage.getItem(key);
      } catch (error) {
        return null;
      }
    },
    setSession(key, value) {
      try {
        sessionStorage.setItem(key, value);
      } catch (error) {
        // Ignore storage failures for private browsing.
      }
    },
  };

  const trackEvent = (name, params = {}) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  };

  let analyticsLoaded = false;

  const isEuOrUk = () => {
    const locales = (navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language]
    ).filter(Boolean);
    const euCountries = new Set([
      "AT",
      "BE",
      "BG",
      "CH",
      "CY",
      "CZ",
      "DE",
      "DK",
      "EE",
      "ES",
      "FI",
      "FR",
      "GB",
      "GR",
      "HR",
      "HU",
      "IE",
      "IS",
      "IT",
      "LI",
      "LT",
      "LU",
      "LV",
      "MT",
      "NL",
      "NO",
      "PL",
      "PT",
      "RO",
      "SE",
      "SI",
      "SK",
      "UK",
    ]);

    const regionMatch = locales.some((locale) => {
      const parts = locale.split("-");
      const region = parts[1] ? parts[1].toUpperCase() : "";
      return euCountries.has(region);
    });

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const tzMatch =
      tz.startsWith("Europe/") ||
      tz === "Atlantic/Reykjavik" ||
      tz === "Atlantic/Faroe" ||
      tz === "Asia/Nicosia";

    return regionMatch || tzMatch;
  };

  const loadAnalytics = () => {
    if (analyticsLoaded) return;
    analyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", ANALYTICS_ID);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
    document.head.appendChild(script);
  };

  const initConsentBanner = () => {
    const stored = storage.get(CONSENT_KEY, "");
    if (!isEuOrUk()) {
      loadAnalytics();
      return;
    }

    if (stored === "granted") {
      loadAnalytics();
      return;
    }

    if (stored === "denied") {
      return;
    }

    const banner = document.createElement("div");
    banner.className = "consent-banner";
    banner.innerHTML = `
      <div class="consent-content">
        <p>We use cookies for anonymous analytics to improve BirdList PA.</p>
      </div>
      <div class="consent-actions">
        <button class="button" type="button" data-consent-accept>Accept</button>
        <button class="button secondary" type="button" data-consent-decline>Decline</button>
      </div>
    `;

    const accept = banner.querySelector("[data-consent-accept]");
    const decline = banner.querySelector("[data-consent-decline]");

    if (accept) {
      accept.addEventListener("click", () => {
        storage.set(CONSENT_KEY, "granted");
        loadAnalytics();
        banner.remove();
      });
    }

    if (decline) {
      decline.addEventListener("click", () => {
        storage.set(CONSENT_KEY, "denied");
        banner.remove();
      });
    }

    document.body.appendChild(banner);
  };

  const getDefaultSeason = () => {
    const month = new Date().getMonth() + 1;
    return month >= 4 && month <= 9 ? "summer" : "winter";
  };

  const getSeason = () => {
    const stored = storage.get(STORAGE_KEYS.season, "");
    return stored === "summer" || stored === "winter" ? stored : getDefaultSeason();
  };

  const setSeason = (season) => {
    state.season = season;
    storage.set(STORAGE_KEYS.season, season);
    document.body.dataset.season = season;
    if (selectors.seasonLabel) {
      selectors.seasonLabel.textContent = `Season: ${SEASON_LABELS[season]}`;
    }
    if (selectors.seasonIcon) {
      const iconName = season === "winter" ? "cloud-snow" : "sun";
      const use = selectors.seasonIcon.querySelector("use");
      if (use) {
        use.setAttribute("href", `imgs/feather-sprite.svg#${iconName}`);
        use.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          `imgs/feather-sprite.svg#${iconName}`
        );
      }
    }
  };

  const getFoundKey = (season) => STORAGE_KEYS.found[season];

  const getFound = (season) => {
    const found = storage.getJSON(getFoundKey(season), []);
    return Array.isArray(found) ? found : [];
  };

  const setFound = (season, ids) => {
    storage.setJSON(getFoundKey(season), ids);
  };

  const getLocationKey = (season) => STORAGE_KEYS.location[season];

  const getDismissedKey = (season) => STORAGE_KEYS.locationDismissed[season];

  const getCompletionKey = (season) => STORAGE_KEYS.completionShown[season];

  const getMilestoneKey = (season, count) => STORAGE_KEYS.milestones[count][season];

  const setFoundCount = (count) => {
    selectors.foundCountEls.forEach((el) => {
      el.textContent = count;
    });
  };

  const toKebabCase = (value) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  const createIcon = (name, className = "") => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", `icon ${className}`.trim());
    svg.setAttribute("aria-hidden", "true");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", `imgs/feather-sprite.svg#${name}`);
    use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `imgs/feather-sprite.svg#${name}`);
    svg.appendChild(use);
    return svg;
  };

  const hydrateBirds = (birds) => {
    state.birdMap = new Map();
    birds.forEach((bird) => {
      const imageSrc = bird.image && bird.image.src ? bird.image.src : "";
      const computedSrc = `imgs/${toKebabCase(bird.name)}.png`;
      const finalImage = {
        alt: bird.image && bird.image.alt ? bird.image.alt : bird.name,
        src: imageSrc || computedSrc,
      };
      state.birdMap.set(bird.id, { ...bird, image: finalImage });
    });
  };

  const renderList = () => {
    if (!selectors.list) return;
    const seasonalIds = SEASONAL_IDS[state.season];
    const ids = [...BASE_IDS, ...seasonalIds];
    const foundIds = new Set(getFound(state.season));
    let seasonRowInserted = false;

    selectors.list.innerHTML = "";
    if (selectors.seasonRow && selectors.seasonRow.parentElement) {
      selectors.seasonRow.parentElement.removeChild(selectors.seasonRow);
    }

    ids.forEach((id) => {
      const bird = state.birdMap.get(id);
      if (!bird) return;

      if (!seasonRowInserted && selectors.seasonRow && seasonalIds.includes(id)) {
        selectors.list.appendChild(selectors.seasonRow);
        seasonRowInserted = true;
      }

      const row = document.createElement("div");
      row.className = "bird-row";
      row.setAttribute("role", "button");
      row.setAttribute("tabindex", "0");
      row.dataset.birdId = id;

      if (foundIds.has(id)) {
        row.classList.add("is-found");
      }

      if (seasonalIds.includes(id)) {
        row.classList.add("is-seasonal");
      }

      const thumbButton = document.createElement("button");
      thumbButton.type = "button";
      thumbButton.className = "bird-thumb";
      thumbButton.setAttribute("aria-pressed", foundIds.has(id));
      thumbButton.setAttribute("aria-label", `Mark ${bird.name} as found`);
      const thumbImage = document.createElement("img");
      thumbImage.src = bird.image.src;
      thumbImage.alt = bird.image.alt;
      const check = document.createElement("span");
      check.className = "check";
      check.appendChild(createIcon("check"));
      thumbButton.appendChild(thumbImage);
      thumbButton.appendChild(check);

      const nameWrap = document.createElement("div");
      const name = document.createElement("div");
      name.className = "bird-name";
      name.textContent = bird.name;
      const meta = document.createElement("div");
      meta.className = "bird-meta";
      if (seasonalIds.includes(id)) {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = "Seasonal";
        meta.appendChild(tag);
      }
      nameWrap.appendChild(name);
      nameWrap.appendChild(meta);

      const chevron = document.createElement("div");
      chevron.className = "chevron";
      chevron.appendChild(createIcon("chevron-right"));

      row.appendChild(thumbButton);
      row.appendChild(nameWrap);
      row.appendChild(chevron);

      thumbButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleFound(id);
      });

      row.addEventListener("click", () => openBirdModal(id));
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openBirdModal(id);
        }
      });

      selectors.list.appendChild(row);
    });

    if (selectors.seasonRow && !seasonRowInserted) {
      selectors.list.appendChild(selectors.seasonRow);
    }

    const currentCount = getFound(state.season).length;
    setFoundCount(currentCount);
    checkMilestones(currentCount);
  };

  const updateRowState = (id) => {
    if (!selectors.list) return;
    const row = selectors.list.querySelector(`[data-bird-id="${id}"]`);
    if (!row) return;

    const foundIds = new Set(getFound(state.season));
    const isFound = foundIds.has(id);
    row.classList.toggle("is-found", isFound);

    const thumb = row.querySelector(".bird-thumb");
    if (thumb) {
      thumb.setAttribute("aria-pressed", isFound);
    }
  };

  const toggleFound = (id) => {
    const isBase = BASE_IDS.includes(id);
    const seasonsToUpdate = isBase ? ["summer", "winter"] : [state.season];
    const currentFound = new Set(getFound(state.season));
    const nextState = currentFound.has(id) ? "unchecked" : "checked";
    let updatedCurrent = getFound(state.season);

    trackEvent("bird_check", { bird_id: id, season: state.season, state: nextState });

    seasonsToUpdate.forEach((season) => {
      const found = new Set(getFound(season));
      if (found.has(id)) {
        found.delete(id);
      } else {
        found.add(id);
      }
      const updated = Array.from(found);
      setFound(season, updated);
      if (season === state.season) {
        updatedCurrent = updated;
      }
    });

    updateRowState(id);
    setFoundCount(updatedCurrent.length);
    checkMilestones(updatedCurrent.length);
  };

  const openBirdModal = (id) => {
    const modal = selectors.birdModal;
    if (!modal) return;
    const bird = state.birdMap.get(id);
    if (!bird) return;

    const found = new Set(getFound(state.season));
    const actionButton = modal.querySelector("#bird-modal-action");

    modal.querySelector("#bird-modal-name").textContent = bird.name;
    const image = modal.querySelector("#bird-modal-image");
    image.src = bird.image.src;
    image.alt = bird.image.alt;
    modal.querySelector("#bird-modal-description").textContent = bird.description;

    const habitatList = modal.querySelector("#bird-modal-habitat");
    habitatList.innerHTML = "";
    bird.habitat.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      habitatList.appendChild(li);
    });

    modal.querySelector("#bird-modal-funfact").textContent = bird.fun_fact;

    const isFound = found.has(id);
    actionButton.textContent = isFound ? "Unmark" : "Found it!";
    actionButton.onclick = () => {
      toggleFound(id);
      closeModal(modal);
    };

    state.activeBirdId = id;
    openModal(modal);
    trackEvent("bird_detail_open", { bird_id: id, season: state.season });
  };

  const checkMilestones = (count) => {
    if (!selectors.locationModal || !selectors.completionModal) return;

    const locationDismissed = storage.get(getDismissedKey(state.season), "false") === "true";
    const locationSelected = storage.get(getLocationKey(state.season), "");


    if (count >= 3 && !locationDismissed && !locationSelected) {
      openLocationModal("auto");
    }

    [3, 5, 10].forEach((milestone) => {
      if (count >= milestone) {
        const key = getMilestoneKey(state.season, milestone);
        if (storage.get(key, "false") !== "true") {
          storage.set(key, "true");
          trackEvent(`birds_found_${milestone}`, { season: state.season });
        }
      }
    });

    const completionKey = getCompletionKey(state.season);
    if (count < 10) {
      storage.set(completionKey, "false");
    }

    const completionShown = storage.get(completionKey, "false") === "true";
    if (count === 10 && !completionShown) {
      storage.set(completionKey, "true");
      openModal(selectors.completionModal);
      trackEvent("completion_shown", { season: state.season });
    }
  };

  const openModal = (modal) => {
    if (!modal) return;
    state.activeModal = modal;
    state.lastFocus = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    const focusable = getFocusable(modal);
    if (focusable.length) {
      focusable[0].focus();
    }
  };

  const openLocationModal = (source) => {
    if (!selectors.locationModal) return;
    trackEvent("location_prompt_shown", { season: state.season, source });
    openModal(selectors.locationModal);
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (modal.id === "location-modal") {
      storage.set(getDismissedKey(state.season), "true");
    }
    if (state.lastFocus && typeof state.lastFocus.focus === "function") {
      state.lastFocus.focus();
    }
    state.activeModal = null;
  };

  const getFocusable = (modal) =>
    Array.from(
      modal.querySelectorAll(
        "a[href], button, textarea, input, select, [tabindex]:not([tabindex='-1'])"
      )
    ).filter((el) => !el.hasAttribute("disabled"));

  const handleTrap = (event) => {
    if (!state.activeModal || event.key !== "Tab") return;
    const focusable = getFocusable(state.activeModal);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleEscClose = (event) => {
    if (event.key !== "Escape") return;
    if (state.activeModal) {
      closeModal(state.activeModal);
    }
  };

  const bindModalControls = () => {
    document.querySelectorAll("[data-modal-close]").forEach((button) => {
      button.addEventListener("click", () => {
        if (state.activeModal) {
          closeModal(state.activeModal);
        }
      });
    });

    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          closeModal(modal);
        }
      });
    });

    document.addEventListener("keydown", handleTrap);
    document.addEventListener("keydown", handleEscClose);
  };

  const initWelcomeModal = () => {
    if (!selectors.welcomeModal) return;
    if (storage.getSession(SESSION_KEYS.welcomeShown)) return;

    openModal(selectors.welcomeModal);
    storage.setSession(SESSION_KEYS.welcomeShown, "true");
    trackEvent("welcome_shown", { season: state.season });

    const startButton = selectors.welcomeModal.querySelector("[data-modal-start]");
    if (startButton) {
      startButton.addEventListener("click", () => closeModal(selectors.welcomeModal));
    }
  };

  const initSeasonToggle = () => {
    if (!selectors.seasonChange) return;
    selectors.seasonChange.addEventListener("click", () => {
      const nextSeason = state.season === "summer" ? "winter" : "summer";
      setSeason(nextSeason);
      renderList();
      updateLocationRow();
      trackEvent("season_change", { season: nextSeason });
    });
  };

  const updateLocationRow = () => {
    if (!selectors.locationRow) return;
    const stored = storage.get(getLocationKey(state.season), "");
    if (selectors.locationValue) {
      selectors.locationValue.textContent = stored ? stored : "Not set";
    }
    if (selectors.locationAction) {
      selectors.locationAction.textContent = stored ? "Change" : "Add";
    }
  };

  const initLocationModal = () => {
    if (selectors.locationAction && selectors.locationModal) {
      selectors.locationAction.addEventListener("click", () => {
        openLocationModal("manual");
      });
    }

    if (!selectors.locationModal) return;

    const chooseButton = selectors.locationModal.querySelector("#location-choose");
    const skipButton = selectors.locationModal.querySelector("#location-skip");
    const select = selectors.locationModal.querySelector("#location-select");

    if (chooseButton && select) {
      chooseButton.addEventListener("click", () => {
        const value = select.value.trim();
        if (value) {
          storage.set(getLocationKey(state.season), value);
          trackEvent("location_set", { location: value, season: state.season });
        }
        storage.set(getDismissedKey(state.season), "true");
        updateLocationRow();
        closeModal(selectors.locationModal);
      });
    }

    if (skipButton) {
      skipButton.addEventListener("click", () => {
        storage.set(getDismissedKey(state.season), "true");
        updateLocationRow();
        closeModal(selectors.locationModal);
      });
    }
  };

  const initShare = () => {
    if (!selectors.shareButton) return;
    selectors.shareButton.addEventListener("click", async () => {
      trackEvent("share_click");
      if (navigator.share) {
        try {
          await navigator.share({ text: SHARE_TEXT });
          return;
        } catch (error) {
          // Fall through to clipboard.
        }
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(SHARE_TEXT);
        } catch (error) {
          // Ignore clipboard errors.
        }
      }

      if (selectors.shareToast) {
        selectors.shareToast.classList.add("show");
        setTimeout(() => selectors.shareToast.classList.remove("show"), 2000);
      }
    });
  };

  const initMerlinCTA = () => {
    const merlinLink = document.querySelector("[data-merlin-cta]");
    if (merlinLink) {
      merlinLink.addEventListener("click", () =>
        trackEvent("merlin_cta_click", { season: state.season })
      );
    }
  };

  const initAssetTracking = () => {
    document.querySelectorAll('[data-track="asset_view"]').forEach((link) => {
      link.addEventListener("click", () => {
        const label = link.dataset.trackLabel || link.getAttribute("href") || "unknown";
        trackEvent("asset_view", { file: label });
      });
    });
  };

  const updateHeaderCounter = () => {
    setFoundCount(getFound(state.season).length);
  };

  const normalizeBaseFound = () => {
    const summerFound = new Set(getFound("summer"));
    const winterFound = new Set(getFound("winter"));
    BASE_IDS.forEach((id) => {
      if (summerFound.has(id) || winterFound.has(id)) {
        summerFound.add(id);
        winterFound.add(id);
      }
    });
    setFound("summer", Array.from(summerFound));
    setFound("winter", Array.from(winterFound));
  };

  const loadBirds = async () => {
    try {
      const response = await fetch("bird-content.json");
      const data = await response.json();
      state.birds = data.birds || [];
      hydrateBirds(state.birds);
      renderList();
    } catch (error) {
      if (selectors.list) {
        selectors.list.innerHTML = "<p>Unable to load bird list right now.</p>";
      }
    }
  };

  const init = () => {
    state.season = getSeason();
    setSeason(state.season);
    normalizeBaseFound();
    bindModalControls();
    initConsentBanner();
    initWelcomeModal();
    initSeasonToggle();
    initLocationModal();
    initShare();
    initMerlinCTA();
    initAssetTracking();
    updateLocationRow();
    updateHeaderCounter();
    document.querySelectorAll("[data-current-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });

    if (selectors.list) {
      loadBirds();
    }
  };

  init();
})();
