import Model from './Model';

interface Props {
  name: string;
  description1: string;
  description2: string;
  github: string;
  linkedin: string;
}

const Home = ({ name, description1, description2, github, linkedin }: Props) => {
    return (
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'full',
        padding: '0 25px',
        backgroundColor: '#333', /* Set background color */
        color: '#f0f0f0', /* Set font color */
      }}>
        <div style={{ width: '40%' }}>
          <div>
            <p style={{ 
              fontFamily: 'Trebuchet MS',
              fontWeight: 'normal',
              fontSize: '20px',
            }}>
              Hi,
            </p>
            <h1 style={{ 
              fontFamily: 'Trebuchet MS',
              fontWeight: 'bold',
              fontSize: '60px',
            }}>
              I'm { name }
            </h1>
            <h2 style={{ 
              fontFamily: 'Trebuchet MS',
              fontWeight: 'bold',
              fontSize: '30px', 
              }}>
                { description1 } 
            </h2>
            <h2 style={{ 
              fontFamily: 'Trebuchet MS',
              fontWeight: 'normal',
              fontSize: '25px', 
              }}>
                { description2 }
            </h2>
            <div>
              <a href={ github } target="_blank" rel="noopener noreferrer">
                <img src="github-mark-white.svg" alt="GitHub" width="28" height="28" style={{ marginRight: '10px' }} />
              </a>
              <a href={ linkedin } target="_blank" rel="noopener noreferrer">
                <img src="linkedin-icon.svg" alt="LinkedIn" width="38" height="38" style={{ marginRight: '10px' }} />
              </a>
            </div>
          </div>
        </div>
        <div style={{ width: '55%' }}>
          <div className="flex ms-auto" style={{ height: "90vh" }}>
            <Model />
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;