"use client";

import React, { useEffect, useState } from "react";
import { clientLogos } from "@/data/clientLogos";
import { AnimatePresence } from "framer-motion";
import { filterButtons, portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { bioData } from "@/data/bioData";
import Image from "next/image";
import Modal from "../blogs/Modal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function AboutOne() {
  const [filteredItem, setFilteredItem] = useState([]);
  const [modalContent, setModalContent] = useState();
  const [showSlider, setShowSlider] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Mockup");
  useEffect(() => {
    setShowSlider(true);
  }, []);
  useEffect(() => {
    if (activeTab == "All") {
      setFilteredItem(portfolioData);
    } else {
      const filtered = portfolioData.filter((elm) =>
        elm.category.includes(activeTab)
      );
      setFilteredItem(filtered);
    }
  }, [activeTab]);
  return (
    <div className="col-xxl-8 col-xl-9">
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">about</h2>
            <p>{bioData.descOne}</p>
            <p>{bioData.descTwo}</p>
            <p>{bioData.descThree}</p>
          </div>
        </div>

        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">Portfolio</h2>
          </div>
        </div>

        <div className="section-wrapper pr-60 pl-60 mb-60">
            <div className="row">
              <div className="col-12">
                <div id="fillter-item-active" className="fillter-item-wrap ">
                  <AnimatePresence>
                    <ResponsiveMasonry
                      columnsCountBreakPoints={{
                        350: 1,
                        850: 2,
                        1100: 3,
                        1200: 2,
                      }}
                    >
                      <Masonry>
                        {filteredItem.map((elm, i) => (
                          <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                            key={elm.id}
                            className={elm.class}
                            style={{ width: "100%" }}
                          >
                            <a
                              href={elm.previewLink}
                              target="_blank"
                              style={{ width: "100%" }}
                              className={`fillter-item cursor-pointer ${elm.bgClass}`}
                            >
                              <div className="img cursor-pointer">
                                <Image
                                  width={310}
                                  height={310}
                                  style={{
                                    width: "100%",
                                    height: "fit-content",
                                  }}
                                  src={elm.imgSrc}
                                  onClick={() => {
                                    setModalContent(elm);
                                    setShowModal(true);
                                  }}
                                  alt="portfolio"
                                />
                              </div>
                              <span className="item-subtitle">
                                {elm.subtitle}
                              </span>
                              <h6
                                className="item-title"
                                onClick={() => {
                                  setModalContent(elm);
                                  setShowModal(true);
                                }}
                              >
                                <a className="cursor-pointer">{elm.title}</a>
                              </h6>
                            </a>
                          </motion.div>
                        ))}
                      </Masonry>
                    </ResponsiveMasonry>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

        <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
          <div className="bostami-section-title-wrap text-center mb-50">
            <h3 className="section-title">Tools</h3>
          </div>

          <div className="bostami-client-slider">
            <div className="swiper-container client_slide_active">
              {showSlider && (
                <Swiper
                  // {...setting}
                  modules={[Navigation, Pagination, Autoplay]}
                  // loop={true}
                  spaceBetween={30}
                  slidesPerView={2}
                  loop={true}
                  autoplay={{
                    delay: 3000, // Time between each slide (in milliseconds)
                    disableOnInteraction: false, // Set to false if you want the auto slider to continue even when the user interacts with the slider (e.g., clicking on a slide).
                  }}
                  breakpoints={{
                    // when window width is >= 576px
                    450: {
                      slidesPerView: 3,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 4,
                    },
                    1200: {
                      // when window width is >= 992px
                      slidesPerView: 5,
                    },
                  }}
                >
                  {clientLogos.map((elm, i) => (
                    <SwiperSlide key={i}>
                      <div className="swiper-slide">
                        {elm}
                      </div>
                    </SwiperSlide>
                  ))}

                </Swiper>
              )}
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center pt-25 pb-25">
        </div>
      </div>
    </div>
  );
}
