import React, { PureComponent } from 'react';

class NotFound extends PureComponent {
    render() {
        return(
            <div className=''>
                <h1>404</h1>
                <h3 className=''>:(</h3>
                <h2>No hemos encontrado la pagina que buscabas</h2>
            </div>
        )
    }
}

export default NotFound;