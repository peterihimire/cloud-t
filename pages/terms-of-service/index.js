import React from "react";
import styles from "./styles.module.scss";
import Layout from "../../layouts/landing";
import CustomSwitch from "../../components/ui/switch";

const terms = () => {
  return (
    <section className={styles.privacy}>
      <div className={styles.policy}>
        <h4>OUR POLICY</h4>
        <h1>Terms of Service</h1>

        <div className={styles.policyTabHeader}>
          <label className={styles.individual} htmlFor="monthly">
            <span>Individual Terms</span>
            <CustomSwitch id="monthly" defaultChecked={true} />
          </label>

          <label className={styles.business}>
            <span>Business Terms</span>
          </label>
        </div>

        <div className={styles.policyText}>
          <div className={styles.policyList}>
            <h4>1. INTRODUCTION</h4>
            <p>
              These Terms of Use ("Terms of Use") including those additional
              terms outlined in Section 16 below as may be amended from time to
              time, together with any documents, policies, or terms they
              incorporate by reference (collectively, the "Terms") are entered
              into by and between you and Cloudticians, LLC, a Nevada limited
              liability company ("Cloudticians", "we", "our" or "us"). For
              purposes of these Terms, "you" includes, individually and
              collectively, any individual you (the user or the user's entity or
              organization) permit to visit, view, use, or access the Platform
              under your Plan. To the extent that you have entered into another
              written agreement with Cloudticians that contains terms that
              directly conflict with any of these Terms, then the conflicted
              terms set forth in such other agreement will control.
            </p>
            <p>
              You acknowledge and agree that by (i) visiting, viewing, using, or
              accessing the Platform, (ii) clicking "Agree", "Purchase",
              "Submit", or similar links, or (iii) signing or confirming a Sales
              Order or other agreement incorporating these Terms, that you have
              read, understand, and agree to be bound by these Terms,
              irrespective of whether you are a guest or a registered user of
              the Platform. IF YOU DO NOT AGREE TO THESE TERMS, THEN YOU MAY NOT
              ACCESS OR USE THE PLATFORM. CLOUDTICIANS'S ALLOWANCE OF YOUR USE
              AND ACCESS TO THE PLATFORM IS EXPRESSLY CONDITIONED UPON YOUR
              ASSENT TO ALL OF THE TERMS AND CONDITIONS OF THESE TERMS.
            </p>
          </div>

          <div className={styles.policyList}>
            <h4>2. PRIVACY POLICY</h4>
            <p>
              Your privacy is important to us, and we are committed to
              protecting your personal information. Any personal information
              submitted in connection with your use of the Platform is subject
              to our privacy policy found at http://www.cloudticians.com/privacy
              (the "Privacy Policy"), which is hereby incorporated by this
              reference. We will use information about you that we obtain either
              directly from you or that we obtain by nature of your use of the
              Platform in accordance with our Privacy Policy solely in
              furtherance of providing you and improving the Platform.
            </p>
          </div>
          <div className={styles.policyList}>
            <h4> 3. DATA LOCATION AND TRANSFER </h4>
            <p>
              Customer Data will be located in data centers within the United
              States. For customers in the European Economic Area ("EEA"), data
              transfer under these Terms either directly or via onward transfer,
              to any country not recognized by the European Commission as an
              adequate country (as defined by the European Commission), is
              necessary for the performance of these Terms.
            </p>
          </div>
          <div className={styles.policyList}>
            <h4> 4. PLATFORM ACCESS AND ACCOUNT REGISTRATION</h4>
            <p>
              To access the Platform, you may be asked to provide certain
              information to help us create and maintain a Cloudticians account
              for you. As such, it is a condition of your use of the Platform
              that all information you provide is correct, current, and
              complete. You agree that all information you provide is governed
              by our Privacy Policy and you consent to all actions we take with
              respect to your information consistent with our Privacy Policy.
            </p>
            <p>
              Except as expressly provided herein, you may not transfer your
              account to any other person and you may not use anyone else's
              account at any time. In cases where you have nevertheless
              authorized or registered another person to use your account or
              Plan, or where you have acted negligently in safeguarding your
              account as set forth above, you agree that you are fully
              responsible for (i) the acts and omissions of such person
              accessing the Platform via your account, (ii) controlling the
              person's access to and use of the Platform, and (iii) the
              consequences of any use or misuse by such person.
            </p>
          </div>

          <div className={styles.policyList}>
            <h4>5. CLOUDTICIANS SUBSCRIPTION PLANS AND PAYMENT</h4>
            <p>(a) Subscription Plan and Subscription Management.</p>
            <p>
              (i) Plan Scope and Term. The Cloudticians individual subscription
              plan you purchase, register for, order, or renew includes the
              features set forth on https://www.cloudticians.com/plans (e.g.,
              Personal, Premium) (each, a "Plan"). Cloudticians grants you, and
              you alone, access to the Platform for the subscription term length
              set forth at the time of redemption or purchase during online
              checkout (the "Initial Term") in strict accordance with these
              Terms. If you purchase a monthly plan, your Initial Term is one
              month from the date of purchase, whereas the purchase of an annual
              plan results in a one year Initial Term. Any renewal of the
              Initial Term (or a Renewal Term), whether such renewal occurs by
              way of your automatic renewal or online checkout, or otherwise,
              shall be deemed a "Renewal Term", and together with the Initial
              Term, the "Term", as applicable.
            </p>
            <p>
              (ii) Automatic Renewal. YOU UNDERSTAND AND AGREE THAT AT THE END
              OF EACH APPLICABLE TERM WE WILL AUTOMATICALLY RENEW YOUR PLAN
              (INCLUDING ALL SUBSCRIPTIONS ON YOUR PLAN AT THAT TIME) FOR A
              PERIOD EQUAL TO THE INITIAL TERM AND PROCESS YOUR PAYMENT METHOD
              OR INVOICE FOR PAYMENT FOR THE RENEWAL TERM UP TO THIRTY DAYS
              PRIOR TO YOUR RENEWAL DATE AT THE THEN-APPLICABLE PRICE FOR YOUR
              PLAN.YOU UNDERSTAND AND AGREE THAT AT THE END OF EACH APPLICABLE
              TERM WE WILL AUTOMATICALLY RENEW YOUR PLAN (INCLUDING ALL
              SUBSCRIPTIONS ON YOUR PLAN AT THAT TIME) FOR A PERIOD EQUAL TO THE
              INITIAL TERM AND PROCESS YOUR PAYMENT METHOD OR INVOICE FOR
              PAYMENT FOR THE RENEWAL TERM UP TO THIRTY DAYS PRIOR TO YOUR
              RENEWAL DATE AT THE THEN-APPLICABLE PRICE FOR YOUR PLAN.
            </p>
            <p>
              (b) Payment. Access to the Platform is expressly conditioned on
              timely payment of the then-applicable fee for the Plan in the
              amount and on the billing frequency set forth during online
              checkout. Your use of and access to the Platform is expressly
              conditioned upon timely payment of the applicable fee(s)
              associated with your Plan and governed by these Terms. We reserve
              the right to increase or decrease any fee at any time; however, to
              the extent you have paid your fee(s) in advance, the increase or
              decrease will not become effective for your subscription Plan or
              service until the end of your current Term.
            </p>
            <p>
              {" "}
              (i) Payment Method. By registering for, subscribing to, or
              purchasing a Plan and providing billing information, you grant us
              and our authorized third-party payment processor(s) the right to
              process payment using the debit card, credit card, bank
              information, third-party payment provider you provide, authorize,
              or maintain on your account (individually, and collectively,
              "Payment Method").{" "}
            </p>
            <p>
              (ii) Editing Your Payment Method. You may edit your payment method
              information by visiting our website and clicking on the "Account"
              link, available at the top of the pages of the Cloudticians
              website. If a payment is not successfully settled, due to
              expiration, insufficient funds, or otherwise, and you do not edit
              your payment method information or cancel your account (see
              Cancellation Policy in Section 11(b) below), you remain
              responsible for any uncollected amounts and authorize us to
              continue billing the payment method, as it may be updated. This
              may result in a change to your payment billing dates. We may
              update your payment method with information provided by the
              applicable payment service provider, and you authorize us to
              continue to charge the applicable fee to the updated payment
              method. Check with your payment method service provider for more
              details.
            </p>
            <p>
              (1) When you provide or add any form of payment method your
              account, your bank may reserve the funds necessary or place a
              small authorization hold until the transaction processes or the
              authorization hold expires, but this is not the actual charge. The
              authorization will be removed from your account according to the
              policies of your bank; and as such, to remove an authorization,
              please contact your bank to clarify how long they hold
              authorizations for online orders.
            </p>
            <p>
              {" "}
              (2) Depending on where you transact with us, the type of payment
              method used, and where your payment method was issued, your
              transaction with us may be subject to foreign exchange fees or
              differences in prices because of exchange rates and other
              Cloudticians-provided geographic-specific pricing. We do not
              support all payment methods, currencies, or locations for payment.
            </p>
            <p>
              {" "}
              (iii) Collection Methods. If your payment method fails, or if your
              account is past due, we may collect fees owed using other
              collection mechanisms—this may include charging other payment
              methods on file with us or retaining collection agencies and legal
              counsel, the fees and cost of which you hereby agree to pay.
              Notwithstanding anything to the contrary, your obligation to pay
              fees continues through the end of your applicable Term and
              regardless of whether you cancel your Plan during such Term. Late
              payments will bear an additional 1.5% interest monthly, plus taxes
              if applicable, which additional interest will be compounded daily.
            </p>
            <p>
              (iv) Chargebacks. If you file a chargeback disputing charges made
              to Payment Method by Cloudticians and the chargeback is granted,
              your account will be deactivated.
            </p>
            <p>
              (v) Excess Use. If you use the Platform or services in violation
              of the scope granted hereunder, including but not limited to
              unauthorized rotation of your subscription to others ("Excess
              Use"), Cloudticians may, in its sole discretion, invoice you for
              the Excess Use, at our current list price for subscriptions and/or
              services for such Excess Use.
            </p>
            <p>
              (vi) Taxes. Payment is exclusive of taxes. You are responsible for
              any applicable sales, use, value-added, or excise taxes, and any
              other similar taxes, duties or charges of any kind, other than
              taxes on Cloudticians's income, imposed by any federal, state, or
              local governmental entity on any amounts payable by you under
              these Terms of Use or any Sales Order whether or not such taxes
              are collected by Cloudticians. When processing your payment method
              or invoicing, We may include a separate charge for such taxes and
              will remit taxes collected, if any, to the appropriate taxing
              authority.
            </p>
          </div>

          <div className={styles.policyList}>
            <h4> 5.1 FREE TRIAL</h4>

            <p>
              Your subscription may begin with a free trial. Your length of your
              free trial will be set out during online checkout. We reserve the
              right, in our absolute discretion, to determine your eligibility
              for a free trial, including creating multiple free trial accounts,
              and to withdraw or to modify your free trial at any time without
              prior notice and without liability. As a free trial user, you
              acknowledge and agree that your use and access to the Platform is
              subject to these Terms of Use.
            </p>
            <p>
              {" "}
              You agree to provide your Payment Method during online checkout
              before beginning your free trial. We will not process your Payment
              Method for payment of your fee during your free trial though you
              may see an authorization on your Payment Method--see Section 5. On
              the last day of your free trial we will convert your free trial
              into a paid Plan and process your Payment Method for the
              applicable fee on the billing frequency chosen during online
              checkout. From that date on, the automatic renewal provisions set
              forth in Section 5(a)(ii) will also apply. By providing your
              Payment Method in conjunction with registration for a free trial,
              you agree to these charges and billing practices. If you do not
              wish to be charged, you must cancel before the end of your free
              trial. Upon cancellation of your free trial, your access to the
              Platform will terminate immediately.{" "}
            </p>
          </div>

          <div className={styles.policyList}>
            <h4> 6. PROPRIETARY MATERIALS </h4>
            <p>
              (a) Use of Cloudticians's Proprietary Materials. The Platform
              contains copyrighted materials, trademarks, proprietary and
              confidential information, and intellectual property of
              Cloudticians and licensors of Cloudticians (collectively,
              "Proprietary Materials"), including without limitation source
              code, video, text, software, photos, graphics, images, music, and
              sound. You agree not to modify, publish, transmit, participate in
              the transfer or sale of, create derivative works of, or in any way
              exploit, in whole or in part, any Proprietary Materials.
              Proprietary Materials may only be accessed through the Platform,
              and not by or from any other site or means. The right of access to
              the Platform does not grant to you any right to download or store
              any Proprietary Materials in any medium, other than (i) that
              downloadable content that may be provided for certain training
              courses, including exercise files, course slides, and sample code,
              (ii) files that are automatically cached by your web browser for
              display purposes, and (iii) if we provide desktop, mobile, or
              other applications for download, a single copy of such application
              for your computer or mobile device solely for your own, personal
              use, provided you agree to be bound by these Terms and the end
              user license agreement below (collectively, the "Authorized
              Downloadable Materials"). Authorized Downloadable Materials are
              held by you pursuant to a limited revocable license only, and are
              subject to all restrictions described herein, including the
              prohibition on further transfer, sale, creation of derivative
              works, or exploitation in any manner.
            </p>
            <p>
              (b) End-user License Agreement. Cloudticians grants to you a
              non-exclusive license for the use and installation of the
              Authorized Downloadable Materials subject to all the terms and
              conditions as set forth in the Terms. This license governs any and
              all software upgrades or additional features provided by
              Cloudticians that would replace or supplement the original
              installed version of the Authorized Downloadable Materials, unless
              those other upgrades or features are covered under a separate
              license, in which case those terms govern.{" "}
            </p>
            <p>
              (c) Reservation of Rights. Cloudticians reserves all intellectual
              property rights to the Proprietary Materials, other than as
              specifically granted under the applicable license granted you
              under these Terms. No posting, copying, transmission,
              retransmission, distribution, redistribution, publication,
              republication, decompilation, disassembling, reverse engineering,
              or otherwise reproducing, storing, transmitting, modifying, or
              commercially exploiting any Proprietary Materials in any form or
              by any means, for any purpose, is permitted without our express
              written permission.
            </p>
            <p>
              (d) Cloudticians Copyright and Marks. The entire Platform is
              protected by copyright. Complying with all applicable copyright
              laws is your responsibility. "Cloudticians", "Skill", "Flow",
              "Skill IQ", "Role IQ", "Team IQ", "Cloudticians IQ", "IRIS", and
              other Cloudticians marks and logos are service marks and
              trademarks of Cloudticians.
            </p>
            <p>
              (e) Third-Party Marks. Other trademarks, service marks and logos
              used on the Site are the trademarks, service marks or logos of
              their respective owners. Cloudticians is using these third party
              trademarks, service marks or logos with the permission of the
              trademark owner or for identification purposes only.
            </p>
            <p>
              (f) Violation of Copyright or Intellectual Property Laws. We
              respect the intellectual property of others, and we ask our users
              to do the same. We may, in appropriate circumstances and at our
              sole discretion, remove or disable access to any materials on the
              Platform that we believe (or are notified) may infringe on the
              rights of others. If you believe that your work has been copied in
              a way that constitutes copyright infringement or otherwise
              infringes on your intellectual property rights, please report it
              to us promptly by way of the procedures that we maintain at
              https://www.cloudticians.com/copyright-procedure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default terms;

terms.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
