---
title: "Config Hub (for Providers)"
description: "Submit your config service and get listed on Config Hub"
ShowToc: false
---

Join the Config Hub network and expand your reach by submitting your config services. Please fill out the form below with your details, and I will review your submission.

A **$7 fee** is required to list your service, which will be requested once your submission is confirmed. It will be processed via a **crypto network**.

I will get back to you as soon as possible with confirmation and further instructions on the next steps.

{{< rawhtml >}}

    <label class="feedback-label config-hub-field">Email</label>
    <input class="feedback-textbox config-hub-field" type="email" name="Name" placeholder="I will contact you with this email..." maxlength="50" required>

    <label class="feedback-label config-hub-field">Crypto network for pay fee</label>
    <select class="config-hub-select config-hub-field" id="config-type" required>
        <option value="" disabled selected>Preferred crypto network for pay fee...</option>
        <option class="config-hub-option" value="ton">TON</option>
        <option class="config-hub-option" value="tether">Tether</option>
        <option class="config-hub-option" value="btc">Bitcoin</option>
        <option class="config-hub-option" value="eth">Ethereum</option>
    </select>

    <label class="feedback-label config-hub-field">Country (Optional)</label>
    <input class="feedback-textbox config-hub-field" type="text" name="Name" placeholder="A country that you primarily support users from..." maxlength="50">

    <label class="feedback-label config-hub-field">Link</label>
    <input class="feedback-textbox config-hub-field" type="text" name="Name" placeholder="A public link for users to reach out to you (website, email, telegram channel, ...)" maxlength="50" required>

    <label class="feedback-label config-hub-field">Config type</label>
    <select class="config-hub-select config-hub-field" id="config-type" required>
        <option value="" disabled selected>Config type that you provide...</option>
        <option class="config-hub-option" value="free">Free</option>
        <option class="config-hub-option" value="paid">Paid</option>
        <option class="config-hub-option" value="both">Both</option>
    </select>

    <label class="feedback-label config-hub-field">Title</label>
    <input id="title-input" class="feedback-textbox config-hub-field" type="text" name="Name" placeholder="Choose a title for your service..." maxlength="50" required>

    <label class="feedback-label config-hub-field">Description</label>
    <textarea id="description-input" class="feedback-textarea config-hub-field" name="FeedBack" placeholder="Describe your service..." maxlength="800" required></textarea>

    <input class="feedback-button button config-hub-field" type="submit" value="Submit">

{{< /rawhtml >}}