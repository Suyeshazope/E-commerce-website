import React from 'react' ;
import { styles } from '../../styles/styles';

function Sponsored() {
  return (
    <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
      <div className='flex justify-between w-full'>
        <div className='flex items-start'>
            <img src='https://static.vecteezy.com/system/resources/previews/022/424/342/original/sony-logo-editorial-free-vector.jpg' alt='' style={{width:"150px" , objectFit:"contain"}}/>
        </div>
        <div className='flex items-start'>
            <img src='https://static.vecteezy.com/system/resources/previews/019/466/990/original/dell-logo-on-white-background-free-vector.jpg' alt='' style={{width:"150px" , objectFit:"contain"}}/>
        </div>
        <div className='flex items-start'>
            <img src='https://img.freepik.com/free-icon/mac-os_318-10374.jpg' alt='' style={{width:"150px" , objectFit:"contain"}}/>
        </div>
        <div className='flex items-start'>
            <img src='https://logos-download.com/wp-content/uploads/2016/04/LG_logo_electronics.png' alt='' style={{width:"150px" , objectFit:"contain"}}/>
        </div>
        <div className='flex items-start'>
            <img src='https://www.freepnglogos.com/uploads/microsoft-logo-small-29.png' alt='' style={{width:"150px" , objectFit:"contain"}}/>
        </div>
      </div>
    </div>
  )
}

export default Sponsored

