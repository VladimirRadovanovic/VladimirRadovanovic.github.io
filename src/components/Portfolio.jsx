import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";
import { Link } from "react-router-dom";

const Portfolio = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);
  // const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen1(!isOpen1)
  }

  function toggleModalTwo() {
    setIsOpen2(!isOpen2)
  }

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>My Recent Work</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                {/* <Tab>All</Tab> */}
                {/* All */}
                {/* <Tab>Vimeo</Tab> */}
                {/* For Vimeo */}
                {/* <Tab>Youtube</Tab> */}
                {/* For Youtube */}
                {/* <Tab>Photography</Tab> */}
                {/* For Images */}
                {/* <Tab>Details</Tab> */}
                {/* For Popup Details */}
              </TabList>
              {/* END TABLIST */}

              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">
                    {/* <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/5.jpg"
                            alt="Vimeo"
                            onClick={() => setOpen2(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Teresa Butler</h3>
                          <span>Vimeo</span>
                        </div>
                      </div>
                    </li> */}
                    {/* END VIMEO */}
                    {/* <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/2.jpg"
                            alt="Youtube"
                            onClick={() => setOpen(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ashely Flores</h3>
                          <span>Youtube</span>
                        </div>
                      </div>
                    </li> */}
                    {/* END YOUTUBE */}
                    {/* <SRLWrapper> */}
                    {/* <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/4.jpg">
                              <img
                                src="assets/img/portfolio/4.jpg"
                                alt="Childhood"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>Derek Smith</h3>
                            <span>Photo shoot</span>
                          </div>
                        </div>
                      </li> */}
                    {/* END SHOT */}
                    {/* <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="Besh Award"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>Gloria Genkins</h3>
                            <span>Photo shoot</span>
                          </div>
                        </div>
                      </li> */}
                    {/* END SHOT */}
                    {/* </SRLWrapper> */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/9.jpg"
                            alt="Details"
                            onClick={toggleModalThree}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Groove</h3>
                          {/* <span> Details</span> */}
                        </div>
                      </div>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/10.jpg"
                            alt="Details"
                            onClick={toggleModalTwo}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>InspoGram</h3>
                          {/* <span> Details</span> */}
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/14.jpg"
                            alt="Details"
                            onClick={toggleModalOne}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>EarthBnB</h3>
                          {/* <span> Details</span> */}
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/7.jpg"
                            alt="Details"
                            onClick={toggleModalFour}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Tale Of Task</h3>
                          {/* <span> Details</span> */}
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END ALL All */}

                <TabPanel>
                  <ul className="portfolio_list">
                    {/* <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/5.jpg"
                            alt="Vimeo"
                            onClick={() => setOpen2(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Teresa Butler</h3>
                          <span>Vimeo</span>
                        </div>
                      </div>
                    </li> */}
                    {/* END VIMEO */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END VIMEO VIDEO */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/2.jpg"
                            alt="Youtube"
                            onClick={() => setOpen(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ashely Flores</h3>
                          <span>Youtube</span>
                        </div>
                      </div>
                    </li>
                    {/* END YOUTUBE */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END YOUTUBE VIDEO */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <SRLWrapper>
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/4.jpg">
                              <img
                                src="assets/img/portfolio/4.jpg"
                                alt="Childhood"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>Derek Smith</h3>
                            <span>Photo shoot</span>
                          </div>
                        </div>
                      </li>
                      {/* END SHOT */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="Besh Award"
                              />
                            </a>
                            <div className="mobile_title">
                              <h3>Gloria Genkins</h3>
                              <span>Photo shoot</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* END SHOT */}
                    </SRLWrapper>
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END PHOTOGRAHY */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/17.jpg"
                            alt="Details"
                            onClick={toggleModalThree}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>InspoGram</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/14.jpg"
                            alt="Details"
                            onClick={toggleModalTwo}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Groove</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/14.jpg"
                            alt="Details"
                            onClick={toggleModalOne}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>EarthBnB</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/7.jpg"
                            alt="Details"
                            onClick={toggleModalFour}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ave Simone</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  </ul>
                  {/* END DETAILS GALLERY */}
                </TabPanel>
                {/* END Details Gallery */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>

      {/* all modal video and popup goes here */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      />
      {/* End Youtube Modal video */}
      {/* <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="100171151"
        onClose={() => setOpen2(false)}
      /> */}
      {/* End Vimeo Modal Video */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* <div className="image"> */}
              {/* <img src="assets/img/thumbs/4-3.jpg" alt="tumb" /> */}
              {/* <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/9.jpg)",
                  }}
                ></div> */}
              {/* </div> */}
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Groove</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Groove is a customer-to-customer e-commerce platform for buying and selling vinyl records.
                  </p>
                  <p>
                    {/* Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate. */}
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first"><Link to={{ pathname: "https://groove-project.herokuapp.com/" }} target="_blank">Live</Link> | <Link to={{ pathname: "https://github.com/VladimirRadovanovic/groove-project" }} target="_blank">GitHub</Link></span>
                      {/* <span>Alvaro Morata</span> */}
                    </li>
                    {/* <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social /> */}
                    {/* END SOCIAL SHARE */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/15.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/16.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/17.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* <div className="image"> */}
              {/* <img src="assets/img/thumbs/4-3.jpg" alt="tumb" /> */}
              {/* <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/9.jpg)",
                  }}
                ></div> */}
              {/* </div> */}
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>InspoGram</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                      InspoGram is a clone of Instagram built using React and Flask.
                  </p>
                  <p>
                    {/* Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate. */}
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first"><Link to={{ pathname: "https://inspogram-app.herokuapp.com/login" }} target="_blank">Live</Link> | <Link to={{ pathname: "https://github.com/VladimirRadovanovic/InspoGram" }} target="_blank">GitHub</Link></span>
                      {/* <span>Alvaro Morata</span> */}
                    </li>
                    {/* <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social /> */}
                    {/* END SOCIAL SHARE */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/12.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/11.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/13.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen1}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* <div className="image"> */}
              {/* <img src="assets/img/thumbs/4-3.jpg" alt="tumb" /> */}
              {/* <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/9.jpg)",
                  }}
                ></div> */}
              {/* </div> */}
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>EarthBnB</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                      EarthBnB is a clone of airbnb built using React and Express.
                  </p>
                  <p>
                    {/* Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate. */}
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first"><Link to={{ pathname: "https://earthbnbapp.herokuapp.com/" }} target="_blank">Live</Link> | <Link to={{ pathname: "https://github.com/VladimirRadovanovic/airbnb-clone-app" }} target="_blank">GitHub</Link></span>
                      {/* <span>Alvaro Morata</span> */}
                    </li>
                    {/* <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social /> */}
                    {/* END SOCIAL SHARE */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/15.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/17.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/16.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}


      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/7.jpg)",
                  }}
                ></div>
              </div> */}
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>TALE Of TASK</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Tale of Task is a gamified to-do list app where users level up by completing their tasks.
                  </p>
                  <p>
                    {/* Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate. */}
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first"><Link to={{ pathname: "https://tale-of-task.herokuapp.com/users/login" }} target="_blank">Live</Link> | <Link to={{ pathname: "https://github.com/christopher-hauser/Tale-of-Task" }} target="_blank">GitHub</Link></span>
                      {/* <span>Alvaro Morata</span> */}
                    </li>
                    {/* <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li> */}
                    {/* <span className="first">Share</span>
                      <Social /> */}
                    {/* END SOCIAL SHARE */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
