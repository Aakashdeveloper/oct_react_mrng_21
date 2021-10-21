import React from 'react';

const ProductDisplay = (props) => {
    console.log(props)
    const renderProducts = props.prodData.map((data) => {
        return(
            <div className="media" key={data.id}>
                <div className="media-left">
                    <img src={data.image} className="media-object" style={{width:100}}/>
                </div>
                <div className="media-body">
                    <h3 className="media-heading">{data.name}</h3>
                    <p>{data.description}</p>
                    <p>Use: {data.usess}</p>
                    <p>Rs: {data.cost}</p>
                </div>
                <hr/>
            </div>
        )
    })
    return(
        <div className="container">
            {renderProducts}
        </div>
    )
}

export default ProductDisplay