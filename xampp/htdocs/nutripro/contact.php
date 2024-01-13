<?php include 'incl/header.php'; ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
    
</script>
<div class="service-header-section" style="background-image:url('assets/images/hero/2.webp')">
    <div class="content-wrapper">
        <h1>Contact </h1>
        <p>Home <span>.</span> Contact</p>
    </div>
    <!-- content-wrapper -->
</div>
<!-- service-header-section -->

<div class="contact-section">
    <div class="inner-sec-container">
        <div class="contact-sec-inner-parent">
            <div class="row">
                <div class="col-lg-5">
                    <div class="map-text-wrapper">
                        <div class="txt-wrapper">
                          <img src="assets/images/logo/Nutri Pro text copy 3.png" style="height:30px;display:block;margin:0 auto" alt="">
                        </div>
                        <!-- txt-wrapper -->
                        <div class="map-area">
                        <img src="assets/images/contact.webp" alt="">
                        </div>
                        <!-- map-area -->
                    </div>
                    <!-- map-text-wrapper -->
                </div>
                <!-- col 5 -->
                <div class="col-lg-7">
                    <div class="contact-form-wrapper">
                        <h3 class="about-txt">CONTACT Us</h3>
                        <h2>Contact For Any Queries </h2>

                        <form method="post" action="./contactForm.php">
                            <div class="form-group"><input type="text" placeholder="Your Name" name="FullName" class="form-control" required></div>
                            <div class="form-group"><input type="text" placeholder="Your Email"  name="Email" class="form-control" required></div>
                            <div class="form-group"><input type="text"placeholder="Subject" name="Subject" class="form-control"required></div>
                            <div class="form-group">
                                <textarea name="Message" id="" cols="30" rows="5" class="form-control"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Send Message " class="theme-btn">
                            </div>
                        </form>
                    </div>
                    <!-- form wrapper -->
                </div>
                <!-- col 7 -->
            </div>
            <!-- row -->
        </div>
        <!-- inner parent -->
    </div>
    <!-- inner sec container -->
</div>
<!-- contact-section -->

<?php include 'incl/footer.php'; ?>