var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Aashraya - Empowering Education</title>
          <link rel="stylesheet" href="style.css" />
          <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
          {/* Swiper JS */}
          {/* Header */}
          <div id="header">
            <div className="container">
              <nav>
                <img src="aashraya.jpg" className="logo" />
                <ul id="sidemenu">
                  <li><a href="#header">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#team">Our Team</a></li>
                  <li><a href="#volunteer">Volunteer Diaries</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#donate">Donate Now</a></li> 
                  <i className="fa-solid fa-circle-xmark" onclick="closemenu()" />      
                </ul>
                <i className="fa-solid fa-bars" onclick="openmenu()" />
              </nav>
              <div className="header-text">
                <h1>Welcome to <span>Aashraya</span></h1>
                <p>Empowering Education for Underprivileged Children</p>
              </div>
              <div className="photo-slider">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    {/* Slide 1 */}
                    <div className="swiper-slide">
                      <img src="home1.jpg" alt="Photo 1" />
                    </div>
                    {/* Slide 2 */}
                    <div className="swiper-slide">
                      <img src="home2.jpg" alt="Photo 2" />
                    </div>
                    {/* Slide 3 */}
                    <div className="swiper-slide">
                      <img src="home3.jpg" alt="Photo 3" />
                    </div>
                    <div className="swiper-slide">
                      <img src="home4.jpg" alt="Photo 3" />
                    </div>
                    <div className="swiper-slide">
                      <img src="home5.jpg" alt="Photo 3" />
                    </div>
                  </div>
                  {/* Add Navigation Arrows */}
                  <div className="swiper-button-next" />
                  <div className="swiper-button-prev" />
                  {/* Add Pagination */}
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
          </div>
          {/* About Us Section */}
          <div id="about">
            <div className="container">
              <h1 className="sub-title">About Us</h1>
              <p>
                Aashraya is dedicated to providing quality education and support to underprivileged children. 
                Our mission is to empower young minds with the tools they need to succeed, and our vision 
                is a world where every child has equal access to educational opportunities.
              </p>
              <p className="highlighted">
                <strong>PRASHRAYA WELFARE FOUNDATION (Team Aashraya)</strong>
              </p>
              <p>
                Founded: <strong>2019</strong> | Incorporated: <strong>2022</strong> | Aashraya<br />
                <em>India's leading youth-led NPO</em>
              </p>
              <ul className="focus-areas">
                <li className="blue">Shiksa</li>
                <li>Shakti</li>
                <li>Paryavaran</li>
                <li>Vastra</li>
                <li>Chikitsa</li>
              </ul>
              <p className="founder">
                Founder: <a href="https://www.instagram.com/priyanshu_aashraya_07?igsh=MXF3OTFibmJ2bXdtcA==" target="_blank">@priyanshu_aashraya_07</a>
              </p>
              <div className="tab-titles">
                <p className="tab-links active-link" onclick="opentab('vision')">Our Vision</p>
                <p className="tab-links" onclick="opentab('mission')">Our Mission</p>
              </div>
              <div className="tab-contents active-tab" id="vision">
                <p>
                </p><ul className="smart-points">
                  <li><i className="fas fa-lightbulb" /> To create a world where every child has access to quality education.</li>
                  <li><i className="fas fa-lightbulb" /> Empower children to reach their full potential through knowledge and support.</li>
                  <li><i className="fas fa-lightbulb" /> Bridge the gap between resources and underprivileged communities.</li>
                </ul></div>
              <div className="tab-contents" id="mission">
                <p>
                </p><ul className="smart-points">
                  <li><i className="fas fa-rocket" /> Facilitate connections between children and nearby ashram schools.</li>
                  <li><i className="fas fa-rocket" /> Provide mentors to guide children on their educational journey.</li>
                  <li><i className="fas fa-rocket" /> Create awareness and gather support for education empowerment initiatives.</li>
                </ul>
                <p />
              </div>
            </div>
          </div>
          {/* Team Section */}
          <div id="team">
            <div className="container">
              <h1 className="sub-title">Our Team</h1>
              <div className="team-carousel">
                <div className="team-slider">
                  <img src="team1.jpg" alt="Team Member 1" />
                  <img src="team2.jpg" alt="Team Member 2" />
                  <img src="team3.jpg" alt="Team Member 3" />
                  <img src="team4.jpg" alt="Team Member 4" />
                  <img src="team5'.jpg" alt="Team Member 5" />
                </div>
              </div>
              <p>Our dedicated team works tirelessly to bring our vision to life and empower young minds.</p>
            </div>
          </div>
          {/* Volunteer Diaries */}
          <div id="volunteer">
            <div className="container">
              <h1 className="sub-title">Volunteer Diaries</h1>
              <p>Our volunteers play a pivotal role in mentoring and guiding children towards a brighter future. Here are glimpses of their incredible work.</p>
              <div className="volunteer-list">
                <img src="ms.jpg" alt="Volunteer Work" />
                <img src="ms2.jpg" alt="Volunteer Work" />
                <img src="ms3.jpg" alt="Volunteer Work" />
                <img src="ms4.jpg" alt="Volunteer Work" />
              </div>
            </div>
          </div>
          {/* Contact Us Section */}
          <div id="contact">
            <div className="container">
              <h1 className="sub-title">Contact Us</h1>
              <p>Have questions? Want to get involved? Reach out to us!</p>
              <p><i className="fa-solid fa-envelope" /> support@prashraya.org</p>
              <p><i className="fa-solid fa-phone" /> +91 8818850707</p>
              <div className="contact-form">
                <form>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <textarea placeholder="Your Message" rows={6} defaultValue={""} />
                  <button className="center-button">Submit</button>
                </form>
              </div>
              <div className="google-forms">
                <ul>
                  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScshDT4nOJjGdK2JmuZ7LApOdG1dIAgjiAIMuB-Oo859Fcp-g/viewform" target="_blank">Aashraya Recruitment Drive</a></li>
                  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeaeM2ErfcILgtoPryGY1vcPNvqRqWuYk6P9va2vUQHgKTYBw/viewform" target="_blank">Shiksha Sponsorship Registration</a></li>
                  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXbzPHTFl9xEVDPrZYPwn97IzHrmrrZxtztahxuROiDiFdtg/viewform" target="_blank">Aashraya Internship Program</a></li>
                  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdvyUjU_5uWv9YmO95O_3wuKd8PiW6pNDpU8KiDf9W-Qvkrdw/viewform?usp=send_form" target="_blank">Social Diwali Campaign</a></li>
                </ul>
              </div>
              <div className="social-icons">
                <a href="https://www.instagram.com/aashraya_07?igsh=MXFwMHppaGVxNzQzcQ=="><i className="fa-brands fa-square-instagram" /></a>
                <a href="https://www.linkedin.com/company/teamaashraya/"><i className="fa-brands fa-linkedin" /></a>
              </div>
            </div>
          </div>
          {/* Donate Section */}
          <div id="donate">
            <div className="container">
              <h1 className="sub-title">Donate Now</h1>
              <p>Your support can change lives! Make a donation today and contribute to a brighter future for underprivileged children.</p>
              <h2>Banking Details:</h2>
              <p><strong>Name:</strong> PRASHRAYA WELFARE FOUNDATION</p>
              <p><strong>Account Number:</strong> 50200078446212</p>
              <p><strong>IFSC Code:</strong> HDFC0000404</p>
              <p><strong>UPI ID:</strong> prashrayawelfarefoun.62727038@hdfcbank</p>
            </div>
          </div>
          <div id="map-section">
            <div className="container">
              <h1 className="sub-title">Find Us</h1>
              <p>Locate us easily on the map below and feel free to visit us!</p>
              <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d61091.104632638904!2d74.55457360618124!3d16.866293178127442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssangli%20aashram%20shools!5e0!3m2!1sen!2sin!4v1732528420890!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
          <div id="mentorship">
            <div className="container">
              <h1 className="sub-title">Mentorship Matching</h1>
              <p>Join our mentorship program to guide and inspire underprivileged children. Together, we can help them achieve their dreams.</p>
              <button className="mentor-button" onclick="openGoogleForm()">Become a Mentor</button>
            </div>
          </div>
          {/* JavaScript */}
        </div>
      );
    }
  });