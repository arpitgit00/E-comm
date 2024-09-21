import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="description-nav-box">Description</div>
            <div className="description-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            A t-shirt is a versatile, casual garment typically
             made from soft, breathable fabrics like cotton or
              a cotton blend. It features a short-sleeved
               design with a round neckline, also known as a
                crew neck, though variations with V-necks or
                 other styles are available. T-shirts come in
                  various sizes, colors, and patterns, catering
                   to different preferences and occasions.
                    They are commonly used for everyday wear,
             layering, or as part of uniforms.</p>
             <p> Many t-shirts are customizable, allowing for 
                printed designs, logos, or slogans, 
                making them popular for personal 
                expression, branding, and marketing purposes.</p>
        </div>
    </div>
  )
}

export default DescriptionBox