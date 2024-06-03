import logo from './asset/main-logo.png'

import arrow from './asset/arrow.png'
import playicon from './asset/playicon.png'
import star3 from './asset/star3.png'
import achievments from './asset/achievments.png'
import frame1 from './asset/frame1.png'
import frame2 from './asset/frame2.png'
import frame3 from './asset/frame3.png'
import color1 from './asset/color1.png'
import color from './asset/color.png'
import featureimg from './asset/featureimg.png'
import Star2 from './asset/Star2.png'
import budget from './asset/budget.png'
import color2 from './asset/color2.png'
import cube2 from './asset/cube2.png'
import cube4 from './asset/cube4.png'
import notification from './asset/notification.png'
import advantage from './asset/advantage.png'
import color3 from './asset/color3.png'
import customizable from './asset/customizable.png'
import star4 from './asset/star4.png'
import testimonial from './asset/testimonial.png'
import nickjones from './asset/nickjones.png'
import Downloadapp from './asset/Downloadapp.png'
import color4 from './asset/color4.png'
import email from './asset/email.png'
import phone from './asset/phone.png'


function App() {
  return (
    <>
      <div className='container' >
        <div className="content">
          <div className='lists '>
            <ul className=" me-auto no-bullets">
              <div className='d-flex'>
                <img src={logo} alt="" />
                <li className='p-2'>uifry&#8482;</li>
              </div>
              <div className='d-flex gap-5'>
                <li className="p-2  " style={{ color: "#FF5555" }}>Home</li>
                <li className='p-2' >About Us</li>
                <li className='p-2'>Featuring</li>
              </div>

            </ul>
            <div className='d-flex gap-3'>
              <button className=' m-2  btn-download'>Download</button>
              {/* <img  className='star-1'src={star} alt="" /> */}
            </div>

          </div>

          <div className=" me-auto  Home ">

            <div className="heading-content">

              <div >
                <h1 className="heading" >Make The Best Financial Decisions </h1>
                <img className='color' src={color} alt="" />

              </div>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti expedita impedit dolore reprehenderit laudantium consequuntur!
              </p>



              <div className="d-flex gap-4">
                <button className='btn-getstarted'>GetStarted <img src={arrow} alt="" /></button>
                <span className='btn-play'><img src={playicon} alt="" />  Watch video</span>
              </div>

              <div className='achievments'>
                <img className='star-3' src={star3} alt="" />
                <img className='img-achievement' src={achievments} alt="" />
              </div>
            </div>


            <div className='frame'>
              <img className='frame1' src={frame1} alt="" />
              <img className='frame3' src={frame3} alt="" />
              <img className='color1' src={color1}></img>
              <img className='frame2' src={frame2} alt="" />
            </div>

          </div>


          <div className='feature'>
            <img className='Star2' src={Star2} style={{ width: '48px', height: '48px' }} alt="" />
            <img className='featureimg' src={featureimg} alt='' />
            <img className='color2' src={color} alt='' />

            <div className='premium'>
              <h3>Features</h3>
              <h1 className='uirfry'>uirfryPremium</h1>

              <div className="budgetinterval">
                <div className='d-flex gap-2'>
                  <img className='budget' src={budget} alt="" />
                  <span style={{ fontSize: "18px", color: '#000', fontWeight: "bold" }}>Budgeting Intervals<img className='mixed' src={color}></img></span>

                </div>
                <div className='para'>
                  <p>cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincibus Eu Adipiscing Sociis Arcu Lorem Porttitior </p>
                </div>

              </div>
              <div className="budgetinterval">
                <div className='d-flex gap-2'>
                  <img className='budget' src={cube2} alt="" />
                  <span style={{ fontSize: "18px", color: '#000', fontWeight: "bold" }}>Budgeting Intervals</span>
                </div>

                <div className='para'>
                  <p>cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincibus Eu Adipiscing Sociis Arcu Lorem Porttitior </p>
                </div>

              </div>
              <div className="budgetinterval">
                <div className='d-flex gap-2'>
                  <img className='budget' src={cube4} alt="" />
                  <span style={{ fontSize: "18px", color: '#000', fontWeight: "bold" }}>Budgeting Intervals</span>

                </div>
                <div className='para'>
                  <p>cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincibus Eu Adipiscing Sociis Arcu Lorem Porttitior </p>
                </div>

              </div>
            </div>

          </div>

          <div className=' me-auto advantage'>
            <div className='title'>
              <h5 style={{ color: "#FF5555", fontWeight: "bold" }}>ADVANTAGES</h5>
              <h1 style={{ color: "#000000", fontWeight: "bold", fontSize: "48px" }}>Why Choose Uirfry ?</h1>
              <div>

              </div>

              <div className='heading'>
                <div className='head'>
                  <img src={notification} alt="" />
                  <span style={{ color: "#000000", fontWeight: "bold", fontSize: "28px" }}>Clever Notification </span>
                </div>

                <div className='para3'><span>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</span></div>
              </div>

            </div>

            <div className='adv-img'>
              <img className='advantage-img' src={advantage} alt="" />
              <img className='color3' src={color3} alt="" />

            </div>

          </div>

          <div className='customizable'>


            <div className='customizable-img'>
              <img src={customizable}></img>
            </div>
            <div className='custom-para'>
              <div className='custom-head'>
                <img style={{ width: "48px", height: "48px" }} src={star4}></img>
                <h1 style={{ fontSize: "28px", color: "#000000", fontWeight: "bold " }}>Full customizable</h1>
              </div>
              <span style={{ width: "562px", heigth: "140px" }}>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</span>
            </div>

          </div>

          <div className='testimonial'>
            <div className='testimonial-title'>
              <h3 style={{ fontSize: "18px" }}>Testimonial</h3>
              <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>what our users say about us?</h1>
            </div>
            <div className='testimonial-content'>
              <div className='testimonial-img'>
                <img src={testimonial} alt="" />
                <img className='testimonial-color' src={color3} alt="" />
              </div>
              <div className='test-head'>
                <h3 style={{ color: "#000000", fontWeight: "bold" }}>The Best Financial Accounting App Ever!</h3>
                <p style={{ fontSize: "18px" }}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                <div className='nick-jones'>
                  <img src={nickjones}></img>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Nick Jones</h3>

              </div>
            </div>

          </div>

          <div className='faq'>
            <div className='faq-title'>
              <h3 style={{ color: "#FF5555", fontSize: "18px" }}>FAQ</h3>
              <h1 style={{ color: "#000000", fontWeight: "bold", fontSize: "48px" }}>Frequently Asked Questions</h1>

            </div>
            <div className='faq-body'>
              <div className='faq-head1'>
                <h3 style={{ fontSize: "28px", fontWeight: "bold" }}>The Best Financial Accounting App Ever!</h3>
                <h3 style={{ fontSize: "18px" }}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</h3>


              </div>
              <div className='faq-head2'>
                <h3 style={{ fontSize: "28px", fontWeight: "bold" }}>The Best Financial Accounting App Ever!</h3>
                <h3 style={{ fontSize: "18px" }}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</h3>
              </div>
            </div>
            <div className='faq-body'>
              <div className='faq-head3'>
                <h3 style={{ fontSize: "28px", fontWeight: "bold" }}>The Best Financial Accounting App Ever!</h3>
                <h3 style={{ fontSize: "18px" }}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</h3>


              </div>
              <div className='faq-head4'>
                <h3 style={{ fontSize: "28px", fontWeight: "bold" }}>The Best Financial Accounting App Ever!</h3>
                <h3 style={{ fontSize: "18px" }}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</h3>
              </div>
            </div>
            <div className='faq-body'>
              <div className='faq-head5'>
                <h3 style={{ fontSize: "28px", fontWeight: "bold" }}>The Best Financial Accounting App Ever!</h3>
                <h3 style={{ fontSize: "18px" }}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</h3>


              </div>
              <div className='faq-head6'>
                <h3 style={{ fontSize: "28px", fontWeight: "bold" }}>The Best Financial Accounting App Ever!</h3>
                <h3 style={{ fontSize: "18px" }}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</h3>
              </div>
            </div>
          </div>
          <div className='black-frame'>
            <div className='frame-content'>
              <img className='color4' src={color4} alt="" />
              <img className='frame-img' src={Downloadapp}></img>
            </div>


          </div>
          <div className='copyright'>
            <div className="uifry">
              <div className='uifry-content'>

                <div className='d-flex gap-2 '>
                  <img style={{ width: "26.93px", height: "34px" }} src={logo}></img>
                  <h1 style={{ fontSize: "32px" }}>Uifry</h1>
                </div>
                <div className='d-flex gap-2'>
                  <img style={{ width: "26.93px", height: "34px" }} src={email}></img>
                  <h1 style={{ fontSize: "16px" }}>Help@frybix.com</h1>
                </div>
                <div className='d-flex gap-2 '>
                  <img style={{ width: "24px", height: "24px" }} src={phone}></img>
                  <h1 style={{ fontSize: "16px" }}>Product</h1>
                </div>



              </div>
            </div>




            <div className="link">
              <div className='link-content'>
                <h1 style={{ fontSize: "32px" }}>Link</h1>
                <h1 style={{ fontSize: "16px" }}>Home</h1>
                <h1 style={{ fontSize: "16px" }} >About Us</h1>
                <h1 style={{ fontSize: "16px" }}>Booking</h1>
                <h1 style={{ fontSize: "16px" }}>Blog</h1>
              </div>
            </div>

            <div className="legal">
              <div className='legal-content'>
                <h1 style={{ fontSize: "32px" }}>Legal</h1>
                <h1 style={{ fontSize: "16px" }}>Team Of Use</h1>
                <h1 style={{ fontSize: "16px" }} >privacy Policy</h1>
                <h1 style={{ fontSize: "16px" }}>Cooking Policy</h1>

              </div>
            </div>
            <div className="product">
              <div className='product-content'>
                <h1 style={{ fontSize: "32px" }}>Product</h1>
                <h1 style={{ fontSize: "16px" }}>Take Tour</h1>
                <h1 style={{ fontSize: "16px" }} >Live Chat</h1>
                <h1 style={{ fontSize: "16px" }}>Reviews</h1>

              </div>
            </div>
            <div className='newsletter'>
              <div className="newsletter-content">
                <h1 style={{ fontSize: "32px" }}>Newsletter</h1>
                <h1 style={{ fontSize: "16px" }}>Stay Up To Date</h1>
                <div className='sub-email'>
                  <div className='youremail'>
                    Your email
                  </div>
                  <div className='subcribe'>Subcribe</div>

                </div>
              </div>
            </div>
          </div>
          <div className='allrights-reserved'>

            <div className='hr'></div>
            <span>Copyright 2022 uifry.com all rights reserved</span>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
