import Link from "next/dist/client/link";
import { Accordion, Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Create = () => {
  return (
    <Layout>
      <PageBanner pageName="FAQ" />
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <p>hola </p>
            </div>
          </div>
        </div>
      </section>
      {/*====== FAQ Area End ======*/}
    </Layout>
  );
};

export default Create;
