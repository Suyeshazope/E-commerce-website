import React from 'react';
import { styles } from '../../styles/styles';
import shop from '../../img/shopping.webp' ;
import { Link } from 'react-router-dom';

function BelowHeader() {
    return (
        <div className={`relative min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
            style={{
                backgroundImage: `url(${shop})` ,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
            }}
        >
            <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
                <h1 className={`text-[40px] leading-[1.5] 800px:text[60px] text-white font-[800] capitalize`}>
                    Best Collection for <br /> Home decoration
                </h1>
                <p className='pt-5 text-[25px] font-[Poppins] font-[400] text-white'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
                </p>
                <Link to="/products" className='inline-block'>
                    <div className={`${styles.button} mt-5 bg-[#5c5ce4]`}>
                        <span className='text-[white] font-Poppins text-[18px]'>
                            Shop Now
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BelowHeader ;
