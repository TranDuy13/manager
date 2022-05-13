import './profile.scss'
import Avatar from '@mui/material/Avatar';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
function Profile(){
    return(
        <> 
            <div className="profileUser">
                <table className='tableProfile' >
                    <tbody>
                    <tr>
                        <div className="th">
                            <th><Avatar sx={{mr:"15px"}}/>
                            Duy Tran</th>
                            <p>Admin</p>
                        </div>
                    </tr>
                    <tr>
                        <div className="th1">
                            <ul>
                                <li>
                                    <div className="detail">
                                        <EmailTwoToneIcon sx={{mr:"15px"}}/>
                                        <h4>Email</h4>
                                    </div>
                                    <h5>n19dccn031@student.ptithcm.edu.vn</h5>
                                </li>
                                <li>
                                    <div className="detail">
                                        <PhoneAndroidTwoToneIcon sx={{mr:"15px"}}/>
                                        <h4>Phone</h4>
                                    </div>
                                    <h5>0366830710</h5>
                                </li>
                                <li>
                                    <div className="detail">
                                        <LocationOnTwoToneIcon sx={{mr:"15px"}}/>
                                        <h4>Location</h4>
                                    </div>
                                    <h5>Thu Duc, Ho Chi Minh</h5>
                                </li>

                                    <h3>Have a good day!</h3>
                            </ul>
                        </div>
                    </tr>
                    </tbody>

                </table>
            </div>
           
        </>
    )
}
export default Profile;