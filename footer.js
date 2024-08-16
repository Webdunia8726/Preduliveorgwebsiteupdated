document.addEventListener("DOMContentLoaded", function() {
var headerContainer=document.querySelector('.container-footer');
if(headerContainer ){
    headerContainer.innerHTML=` <div class="footer ">
<div class="container-fluid ">
  <div class="newsletter-container text-light mt-0">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-4">
                <p class="mb-0">Always stay up-to-date.</p>
                <h2>Join Our Newsletter</h2>
            </div>
            <div class="col-md-8">
                <form class="row ">
                    <div class="col-md-3">
                        <input type="text" class="form-control" placeholder="Enter First Name*" required>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control" placeholder="Enter Last Name*" required>
                    </div>
                    <div class="col-md-3">
                        <input type="email" class="form-control" placeholder="Enter Email*" required>
                    </div>
                    <div class="col-md-3">
                    <a href=""><button type="button" class="btn btn-light subscribe-btn" id="sub-btn">Subscribe</button></a>
                  </div>
                </form>
            </div>
        </div>
    </div>
</div>
<br>
<br>
    <div class="row">
        <div class="col-md-3">
            <img src="Assets/Images/Home/preduliv-footer.png" alt="" class="img-fluid footer-logo"> <br>
            <h6 class="text-white mt-3">Empowering the future through innovative programs, real-world skills and community-driven change. </h6>
            <br>
            <br>
            <a href="https://www.linkedin.com/company/predulive-edutech-foundation/"><i class="fa-brands fa-linkedin fa-2xl" style="color: #1552bc;"></i></a>
            <a href="https://www.instagram.com/predulive/"><i class="fa-brands fa-instagram fa-2xl" style="color: #c70a56;"></i></a>
            <a href="https://www.facebook.com/predulive/"><i class="fa-brands fa-facebook fa-2xl" style="color: #2059bc;"></i></a>
            <a href="https://twitter.com/PreduliveF"><i class="fa-brands fa-square-twitter fa-2xl" style="color: #264f97;"></i></a>
            <a href="https://youtube.com/@predulive3871?si=eL9P3bAEyP33r8eu"><i class="fa-brands fa-youtube fa-2xl" style="color: #FF0000;"></i></a>
        </div>
            <br>
            <br>
            <br><br>
            
        <div class="col-md-3">
            <h4 class="text-white">Platform</h4>
            <div class="footer-elements">
           <li><a href="">Internship & Platform</a></li>
           <li><a href="">LeadersBoli</a></li>
           <li><a href="">Programs</a></li>
           <li><a href="">Social Compaigns</a></li>
          </div>
        </div>
        <div class="col-md-3">
            <h4 class="text-white">Discover</h4>
            <li><a href="">Partner With Us</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Donate Now</a></li>


        </div>
        <div class="col-md-3">
            <h4 class="footer-heading text-white">Legal</h4>
            <li><a href="">POSH</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Community Guidelines</a></li>

</div>
<br>
<br>
<hr class="mt-2">
<div class="container-fluid  p-2">
<h6 class="text-center text-white">© 2024 Predulive Edutech Foundation. All Rights Reserved</h6>
</div> 
`}
}
)