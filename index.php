<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Michael Geise | Philadelphia-based Digital Product Designer </title>
        <meta name="description" content="I am a Philadelphia-based technology enthusiast with a passion for design and a decade of experience in design, front-end development, and digital marketing.">
        <meta name="author" content="Michael Geise">
        <!-- Favicon-->
        <link rel="icon" type="image/png" href="images/mg-favicon.png">
        <link rel="mask-icon" href="images/mg-logo.svg" color="blue">
        <link rel="icon" type="image/svg+xml" href="images/mg-logo.svg">
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet">
        
        <!-- Bootstrap CSS-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <!-- Custom CSS -->
        <link href="css/style.css" rel="stylesheet" />
        <!-- CSS Animations -->
        <link href="css/animate.min.css" rel="stylesheet">
        <!-- Mordernizr -->
        <script src="js/modernizr-2.8.3.js"></script>
        <!-- Google Analytics -->
      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-12293005-1', 'auto');
        ga('send', 'pageview');

      </script>
      <!-- end Google Analytics -->
    </head>
    <body id="page-top">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg bg-white text-uppercase fixed-top" id="mainNav" data-animate="fadeInDown">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="images/mg-logo.svg" class="img-responsive" alt="MG logo" title="Go to intro section"></a>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-0 mx-lg-1 mx-3"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#work">Work</a></li>
                    <li class="nav-item mx-0 mx-lg-1 mx-3"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li>
                </ul>
            </div>
        </nav>
        <!-- Masthead-->
        <header class="masthead">
            <div class="container d-flex align-items-center flex-column">
                <div class="row">
                    <div class="col-md-4 ml-auto">

                        <!-- Masthead Avatar Image-->
                        <img class="masthead-avatar mb-5 img-fluid" src="images/profile-pic.jpg" alt="photo of Michael smiling at the camera." data-animate="fadeInLeft" />
                    </div>
                    <div class="col-md-7 align-end ml-auto">
                        <!-- Masthead Heading-->
                        <h1 class="masthead-heading text-uppercase mt-5" data-animate="fadeInDown">Michael Geise</h1>
                        <h2 class="mt-3 text-uppercase" data-animate="fadeInDown">Product Designer</h2>
                        <!-- Masthead Subheading-->
                        <p class="masthead-subheading font-weight-light mb-0 mt-3" data-animate="fadeInUp">I'm a professional problem-solver with the vision and experience to lead a project and the skills to deliver it. I take a user-centered approach to achieve business goals while striving for an optimized development effort.</p>
                    </div>
                </div>
            </div>
        </header>
        <!-- Work Section-->
        <section class="page-section" id="work">
            <div class="container" data-animate="fadeInLeft">
                <!-- Portfolio Section Heading-->
                <h2 class="page-section-heading text-uppercase mb-3">Work</h2>
                <div class="row justify-content-center">
                        <!-- Portfolio Item 1-->
                    <div class="col-md-12 mb-5">
                        <!-- Work items -->
                        <?php include 'work-items.php';?>
                    </div>
                </div>
            </div>
        </section>
        <!-- About Section-->
        <section class="page-section" id="about" data-animate="fadeIn">
            <div class="container">
                <!-- About Section Heading-->
                <h2 class="page-section-heading text-uppercase mb-3">About</h2>
                <!-- About Section Content-->
                <div class="row">
                    <div class="col-lg-8 mb-5">
                        <p class="masthead-subheading font-weight-light mb-0 mt-3">In college, I majored in business and got a minor in art. From Adobe Cloud and coding to analytics and business processes, I have always had a wide range of interests, which I believe is crucial to understanding the combination of art and science needed in product design.</p>
                        <p class="masthead-subheading font-weight-light mb-0 mt-3">I love keeping up with the newest product trends and will talk to you about the <a href="https://www.interaction-design.org/literature/topics/design-thinking" target="_blank" title="learn about Design Thinking">Design Thinking</a> process anytime.</p>
                        <p class="masthead-subheading font-weight-light mb-0 mt-3">I live in the suburbs of Philadelphia, and when I'm not making digital products, I create children's stories, follow local sports, and enjoy nature.</p>
                    </div>
                    <div class="col-lg-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="linkedin-logo mt-5 mb-5">
                                    <i class="fab fa-linkedin-in"></i>
                                </div>
                                <h3 class="card-title mt-3 mb-3 h4">Contact me or check out my profile on LinkedIn.</h3>
                                <a class="btn btn-xl btn-block btn-primary mt-3" href="https://www.linkedin.com/in/michael-geise-20875623/">
                                    <i class="fas fa-external-link-alt"></i>
                                    View profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bonus Section-->
        <section class="page-section" id="bonus" data-animate="fadeIn">
            <div class="container">
                <!-- Bonus Section Heading-->
                <h2 class="page-section-heading text-uppercase mb-3">Bonus</h2>
                <!-- Bonus Section Content-->
                <div class="row">
                    <div class="col-md-12 mb-5">
                        <p class="masthead-subheading font-weight-light mb-0 mt-3">Wow, you're still here?! Thanks for the interest, I'm happy to have you.</p>
                        <p class="masthead-subheading font-weight-light">Here are some of my side projects as well as some tools and resources I like.</p>
                    </div>
                </div>
                <h3 class="text-uppercase mt-5 mb-3">Passion Projects</h3>
                <?php include 'passion-projects.php';?>
                
                    
                <h3 class="text-uppercase mt-5 mb-3">Favorite Resources</h3>
                <div class="row fav-links">
                    <div class="col-md-6">
                        <p><a href="https://figma.com/" target="_blank" title="UI & prototyping tool" data-toggle="tooltip" data-placement="top"><i class="fas fa-external-link-alt"></i> Figma</a></p>
                        <p><a href="https://miro.com/" target="_blank" title="Digital whiteboard tool" data-toggle="tooltip" data-placement="top"><i class="fas fa-external-link-alt"></i> Miro</a></p>
                        <p><a href="https://accessible-colors.com/" target="_blank" title="Accessibility tool" data-toggle="tooltip" data-placement="top"><i class="fas fa-external-link-alt"></i> Accessibe Colors</a></p>
                    </div>
                    <div class="col-md-6">
                        <p><a href="https://www.nngroup.com/" target="_blank" title="Research-based UX guidance" data-toggle="tooltip" data-placement="top"><i class="fas fa-external-link-alt"></i> Nielsen Norman Group</a></p>
                        <p><a href="https://www.interaction-design.org/" target="_blank" title="Online UX design courses" data-toggle="tooltip" data-placement="top"><i class="fas fa-external-link-alt"></i> Interaction Design Foundation</a></p>
                        <p><a href="https://www.producttalk.org/" target="_blank" title="Product blog and resource" data-toggle="tooltip" data-placement="top"><i class="fas fa-external-link-alt"></i> Product Talk</a></p>
                    </div>

                </div>
            </div>
        </section>

        <!-- Footer / Copyright Section-->
        <footer class="copyright py-4 text-center">
            <div class="container"><small>&copy; Michael Geise <?php echo date("Y"); ?>  all rights reserved.</small></div>
        </footer>
        <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)-->
        <div class="scroll-to-top d-lg-none position-fixed">
            <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
        </div>
        <!-- Portfolio Modals-->
        <?php include 'modals.php';?>
        
        
        <!-- Bootstrap core JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Third party plugin JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        
        <script src="js/jquery.waypoints.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>

    </body>
</html>
