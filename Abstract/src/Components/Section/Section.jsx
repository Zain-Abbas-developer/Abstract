import React from 'react'
import './Section.css'
import arrow_svg from '../../assets/svg/right-arrow-svgrepo-com.svg'
import icon_version from '../../assets/icon-versions.png'
import icon_account from '../../assets/icon-account.png'
import icon_billing from '../../assets/icon-billing.png'
import icon_comment from '../../assets/icon-comment.png'
import icon_authenticate from '../../assets/icon-authenticate.png'
import icon_organization from '../../assets/icon-organizations.png'

const Section = () => {
  return (
    <div>
      <section className="section-container">
        <div className="content">
          <img src={icon_version} alt="" />
          <div className="context">
            <h2>Using Abstract</h2>
            <p>
              Abstract lets you manage, version, and document your designs in
              one place.
            </p>
            <a href="">Learn More →</a>
          </div>
        </div>
        <div className="content">
          <img src={icon_account} alt="" />
          <div className="context">
            <h2>Manage your account</h2>
            <p>
              Configure your account settings, such as your email, profile
              details, and password.
            </p>
            <a href="">Learn More →</a>
          </div>
        </div>{" "}
        <br />
        <div className="content">
          <img src={icon_organization} alt="" />
          <div className="context">
            <h2>Manage organizations, teams, and projects</h2>
            <p>
              Use Abstract organizations, teams, and projects to organize your
              people and your work.
            </p>
            <a href="">Learn More →</a>
          </div>
        </div>
        <div className="content">
          <img src={icon_billing} alt="" />
          <div className="context">
            <h2>Manage billing</h2>
            <p>Change subscriptions and payment details.</p>
            <a href="">Learn More →</a>
          </div>
        </div>
        <div className="content">
          <img src={icon_authenticate} alt="" />
          <div className="context">
            <h2>Authenticate to Abstract</h2>
            <p>
              Set up and configure SSO, SCIM, and Just-in-Time provisioning.
            </p>
            <a href="">Learn More →</a>
          </div>
        </div>
        <div className="content">
          <img src={icon_comment} alt="" />
          <div className="context">
            <h2>Abstract support</h2>
            <p>Get in touch with a human.</p>
            <a href="">Learn More →</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section
