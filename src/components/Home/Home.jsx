import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import window_img from "../../img/window.png";
import astro_circle from "../../img/astrology-circle-orance.png";
import aries from "../../img/aries.png";
// import aries_gold from "../../img/aries-gold.png";
import Header from "../navbar/Header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import setData from "../../redux/action/Action_creator";

const Home = () => {
  const [formData, setFormData] = useState({
    dob: "",
    time: "",
    latitude: "",
    longitude: "",
    timezone: "",
  });

  console.log(formData);

  const dispatch = useDispatch();
  const setDataInStore = () => {
    dispatch(setData(formData));
  };

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <div className="hero_section_wrapper">
        <Container fluid>
          <Row>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="left ">
                <div className="form_wrapper">
                  {/* <img src={aries_gold} alt="" className="img-fluid" /> */}
                  <img src={aries} alt="" className="img-fluid" />
                  <form action="">
                    <div className="dob_filed">
                      <label htmlFor="dob">Date of Birth</label>
                      <input
                        type="date"
                        value={formData.dob}
                        placeholder="DOB"
                        className="form-control"
                        id="dob"
                        onChange={(e) =>
                          setFormData({ ...formData, dob: e.target.value })
                        }
                      />
                    </div>
                    <div className="time_filed">
                      <label htmlFor="tob">Time of Birth</label>
                      <input
                        type="time"
                        value={formData.time}
                        placeholder="Time of Birth"
                        className="form-control"
                        id="tob"
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                      />
                    </div>
                    <div className="lat_long_filed">
                      <div className="row">
                        <div className="col">
                          <label htmlFor="lat">Latitude</label>
                          <input
                            type="number"
                            value={formData.latitude}
                            placeholder="Latitude"
                            className="form-control"
                            id="lat"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                latitude: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="col">
                          <label htmlFor="long">Longitude</label>

                          <input
                            type="number"
                            value={formData.longitude}
                            placeholder="Longitude"
                            className="form-control"
                            id="long"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                longitude: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="timeZone_field">
                      <label htmlFor="timezone">Time Zone</label>

                      <input
                        type="number"
                        name=""
                        id="timezone"
                        placeholder="Timezone"
                        className="form-control"
                        value={formData.timezone}
                        onChange={(e) =>
                          setFormData({ ...formData, timezone: e.target.value })
                        }
                      />
                    </div>

                    <div className="submit_btn">
                      <Link to="astro_detail">
                        <button
                          className="btn form-control"
                          onClick={setDataInStore}
                        >
                          Submit
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={6} className="">
              <div className="astro_animation">
                <div className="window_bg text-center ">
                  <img src={window_img} alt="" className="img-fluid" />
                  <img src={astro_circle} alt="" className="img-fluid" />
                </div>
                {/* <div className="astro_circle"></div> */}
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              atque? Impedit aut rerum fugiat rem? Beatae atque expedita
              dolores. Nemo ratione temporibus magnam nam, ipsam doloremque
              reiciendis eaque libero molestias eius quasi labore? Labore culpa
              possimus sint pariatur sed, molestias nihil harum omnis adipisci
              delectus? Blanditiis amet quod eius quae asperiores facere nemo
              nostrum illum quia, voluptas, eaque, doloremque vitae praesentium
              architecto quaerat suscipit minima molestias ea consectetur
              adipisci nulla sapiente? Dolor asperiores quasi incidunt porro
              impedit! Cum praesentium quod laboriosam ipsam aspernatur aperiam
              iure, quisquam mollitia alias explicabo voluptatum in perferendis
              pariatur voluptates, nostrum magnam molestiae, assumenda quae
              repudiandae? Ab omnis architecto maxime nam repudiandae minima
              nisi necessitatibus praesentium quos voluptates, suscipit, iusto
              molestias a maiores, delectus sapiente totam. Cum iste blanditiis
              sunt voluptatem. Praesentium obcaecati, deserunt nobis aspernatur,
              velit magnam enim explicabo nisi ipsum fugiat voluptatum facilis?
              Iure tempore porro atque quaerat? Quod dolores excepturi, eaque
              minima aspernatur assumenda quibusdam labore accusamus molestias
              iure, eveniet at repudiandae necessitatibus! Ad nihil praesentium
              hic impedit voluptatem voluptates iure nulla quia, iste dolore
              natus consectetur delectus perferendis ratione neque amet animi
              repudiandae. Expedita facilis illum mollitia ad magni, dignissimos
              voluptates amet sit obcaecati, voluptas eaque natus corrupti.
              Reprehenderit sint, aliquam molestiae voluptatibus repellendus hic
              aperiam alias, dicta quas veniam ducimus qui corporis provident!
              Cumque ipsam itaque porro repellat blanditiis unde labore
              voluptate, nesciunt voluptates reprehenderit corrupti. Sapiente
              ipsum ipsa magni beatae, sit error atque itaque molestiae
              accusamus, assumenda dolore non alias officia iusto voluptates,
              dignissimos qui inventore consequatur eius fugiat illo iste
              laborum? Nulla et doloribus dolore magnam nesciunt quasi
              cupiditate ipsum sint aut natus maxime ducimus, explicabo sit nisi
              dolorum sed! Nesciunt illum amet deserunt dolor, odit natus libero
              earum obcaecati iste sit nostrum ipsam explicabo repellendus cum
              repellat eum repudiandae fugiat quas. Corrupti eum mollitia error
              maxime dolores. Odio soluta aperiam doloremque architecto ab,
              laboriosam repellat, quos nulla, accusamus nam possimus iure
              molestiae saepe suscipit reiciendis. Debitis dolorem delectus
              dignissimos molestiae quae harum, earum ea ab sed esse, ipsum
              distinctio qui, molestias id. Voluptas velit quod incidunt
              laudantium est eos iste expedita illo amet placeat adipisci enim
              porro ducimus minus, illum tenetur vel laboriosam alias saepe
              blanditiis provident molestias maxime quas. Dolorum expedita
              veritatis eum in blanditiis rem mollitia! Error ducimus quia dolor
              nisi obcaecati! Hic corrupti minus itaque laudantium quidem
              doloremque placeat maxime assumenda. Esse beatae tempora accusamus
              quae ea magni vel sed eius ipsam enim libero quis natus porro,
              reprehenderit voluptates recusandae dolorem molestias deserunt
              voluptatibus suscipit, repudiandae odit quam in! Et amet, ducimus
              dignissimos ipsa quasi dolorum pariatur voluptatem autem at nihil
              animi debitis earum. Facere ipsa aut consectetur voluptas corrupti
              voluptatem distinctio minus iusto nihil, ad quas cum odit
              voluptate sint rem eligendi ea exercitationem dolores? Architecto
              fuga enim totam officia accusamus voluptates error molestiae
              suscipit magnam! Saepe et rem ullam, nobis enim numquam nesciunt
              perferendis praesentium autem optio in minima totam vitae iure
              quibusdam at cumque! Molestiae explicabo perspiciatis, atque
              veniam odio sapiente id pariatur ratione voluptatem sequi,
              perferendis nobis cumque modi vero? Reprehenderit!
            </Col>
          </Row> */}
        </Container>
      </div>
    </div>
  );
};

export default Home;
