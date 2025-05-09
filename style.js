import './App.css';
import './swiper-bundle.min.css';

const styles = {
  body: {
    backgroundImage: "url('bgr3.avif')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    color: '#fff',
    fontFamily: 'Poppins, Arial, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    position: 'relative'
  },
  bodyOverlay: {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: -1
  },
  header: {
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  container: {
    padding: '10px 10%'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  logo: {
    width: '140px'
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    position: 'relative'
  },
  navLinkHover: {
    after: {
      content: "''",
      width: '100%',
      height: '3px',
      background: '#ff004f',
      position: 'absolute',
      left: 0,
      bottom: '-6px',
      transition: '0.5s'
    }
  },
  responsiveNav: {
    background: '#ff004f',
    position: 'fixed',
    top: 0,
    right: '-200px',
    width: '200px',
    height: '100vh',
    paddingTop: '50px',
    zIndex: 2,
    transition: 'right 0.5s'
  },
  headerText: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '60px'
  },
  aboutSection: {
    background: '#080808',
    color: '#fff',
    padding: '60px 20px',
    textAlign: 'center'
  },
  aboutSubtitle: {
    fontSize: '36px',
    fontWeight: 600,
    color: 'purple',
    marginBottom: '20px'
  },
  focusItem: {
    fontSize: '18px',
    color: '#fff',
    background: 'palevioletred',
    padding: '8px 15px',
    margin: '5px',
    borderRadius: '5px',
    boxShadow: '0 4px 10px rgba(255, 0, 79, 0.5)'
  },
  teamSection: {
    background: '#000',
    color: '#fff',
    padding: '50px 0',
    textAlign: 'center'
  },
  teamSlider: {
    display: 'flex',
    width: '1000%',
    animation: 'scroll-infinite 15s linear infinite'
  },
  teamImage: {
    width: '200px',
    height: '200px',
    margin: '0 10px',
    objectFit: 'cover',
    borderRadius: '50%',
    border: '2px solid #ff004f'
  },
  contactForm: {
    input: {
      width: '100%',
      maxWidth: '500px',
      padding: '10px',
      margin: '10px 0',
      background: '#262626',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      fontSize: '16px'
    },
    button: {
      padding: '10px 30px',
      background: '#ff004f',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background 0.5s'
    },
    buttonHover: {
      background: '#b54769'
    }
  },
  donateSection: {
    background: 'linear-gradient(135deg, #000000, #2b2b2b)',
    padding: '50px 20px',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
  },
  mapSection: {
    background: '#000',
    color: '#fff',
    padding: '50px 0',
    textAlign: 'center'
  },
  mentorshipSection: {
    background: '#f4f4f4',
    padding: '50px 0',
    textAlign: 'center',
    color: '#333'
  },
  mentorButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#ff004f',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  mentorButtonHover: {
    backgroundColor: '#e60046'
  }
};

export default styles;
