import React from 'react'
import { MapPinLine, PhoneCall } from 'phosphor-react'

export function Signature({
  firstname,
  position,
  address,
  phone,
}) {
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
                    src="https://www.thegrace.com.br/assets/img/logo-the-grace-horizontal.svg"
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
                            color: '#172D4B',
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
      </div>
    </div>
  )
}
