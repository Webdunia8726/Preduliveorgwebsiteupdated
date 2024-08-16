document.addEventListener('DOMContentLoaded', function() {
    var headerContainer = document.querySelector('.container-header');
    if (headerContainer) {
        headerContainer.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html"><img src="Assets/Images/Home/logo.png" class="logo" alt=""></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="about.html">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="https://leadersboli.com/">Leadersboli</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="https://preduliveinfotech.com/">Internship</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="SocialCompaigns.html">Social Campaign</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="programpage.html">Programs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="partnership.html">Partner With Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="Faq.html">FAQ</a>
              </li>
            </ul>
            <a href="donatenow.html">              <button class="btn btn-outline-danger mx-1" type="submit">Donate Now</button>
            </a>
          </div>
        </div>
      </nav>
            `;
    }
  });
  