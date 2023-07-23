import React from 'react'
import { MapPinLine, PhoneCall, Download } from 'phosphor-react'
import html2canvas from 'html2canvas'
import logo from './logo.png'; // Adjust the path accordingly

export function Signature({
  firstname,
  position,
  address,
  phone,
}) {

  const handleDownload = () => {
    const table = document.getElementById('assign');

    // Set crossorigin="anonymous" on all images to handle cross-origin images
    const images = table.getElementsByTagName('img');
    Array.from(images).forEach((img) => {
      img.setAttribute('crossorigin', 'anonymous');
    });

    // Ensure the table is fully loaded before capturing
    html2canvas(table, {
      scrollX: 0,
      scrollY: -window.scrollY, // Handle scroll position for capturing
    }).then((canvas) => {
      // Convert the canvas to PNG image data URL
      const imageUri = canvas.toDataURL('image/png');

      // Create a download link
      const a = document.createElement('a');
      a.href = imageUri;
      a.download = 'signature.png';
      a.click();
    });
  };


  return (
    <div style={{ overflow: 'hidden', textAlign: 'left', 
                  fontFamily: 'Figtree', backgroundColor: 'white', 
                  borderRadius: '.25rem', padding: '10px'}}>
      <div>
        <table id="assign">
          <tbody>
            <tr>
              <td
                style={{
                  paddingRight: '10px',
                  borderRight: '1px solid #3261AB',
                }}
              >
                <a
                  href="https://www.thegrace.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="The Grace"
                    src={logo}
                    style={{
                      borderStyle: 'none',
                      display: 'block',
                      width: '220px',
                      marginLeft: '2px',
                      textDecoration: 'none',
                    }}
                  />
                </a>
              </td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          minWidth: '250px',
                          paddingLeft: '10px',
                          color: '#333333',
                          fontFamily: 'Figtree, Arial,sans-serif',
                          fontSize: '16px',
                          fontWeight: 'bold',
                        }}
                      >
                        {`${firstname}`}
                        <div
                          style={{
                            marginTop: '-5px',
                            color: '#95C121',
                            fontWeight: 'normal',
                          }}
                        >
                          <i>{position}</i>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '5px' }}>
                        <table>
                          <tbody>
                            {address && (
                              <tr>
                                
                                <td
                                  style={{
                                    textDecoration: 'none',
                                    color: '#172D4B',
                                    fontFamily: 'Figtree',
                                    fontSize: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                   
                                    gap: '5px'
                                  }}
                                >
                                  <MapPinLine size={16} /> {address}
                                </td>
                              </tr>
                            )}
                            {phone && (
                              <tr>
                               
                                <td
                                  style={{
                                    textDecoration: 'none',
                                    color: '#172D4B',
                                    fontFamily: 'Figtree',
                                    fontSize: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                   
                                    gap: '5px'
                                  }}
                                >
                                  <PhoneCall size={16} /> {phone}
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

          </tbody>
        </table>

        <button onClick={handleDownload} style={{ marginTop: '10px', backgroundColor: '#3261AB', border: 'none', padding: '10px', color: '#fff', borderRadius: '8px' }}>
          <Download size={16} /> Download da assinatura
        </button>
      </div>
     
    </div>
    
  )
}
