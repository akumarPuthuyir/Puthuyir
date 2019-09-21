import React, { Component } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import BeatLoader from 'react-spinners/BeatLoader'

class Spinner extends Component {
    render() {
        return (
            <div>
                <LoadingOverlay
                    active={true}
                    spinner={<BeatLoader/>}
                    text="Fetching Address..."
                    styles={{
                       position: "fixed", /* Sit on top of the page content */
                        display: "none", /* Hidden by default */
                        width: "100%", /* Full width (cover the whole page) */
                        height: "100%", /* Full height (cover the whole page) */
                        top: 0, 
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0,0,0,0.5)", /* Black background with opacity */
                        // z-index: 2, /* Specify a stack order in case you're using a different order for other elements */
                        cursor: "pointer", /* Add a pointer on hover */
                      
                    }}
                    >
                    </LoadingOverlay>
            </div>
        );
    }
}

export default Spinner;