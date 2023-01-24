---
layout: Contact
title: Contact
email: info@thetreacherousturn.ai
core_members:
- name: Aemilia Dixon
  avatar: img/headshots/emily.png
  role: project manager
- name: Berbank Green
  avatar: img/headshots/berbank.png
  role: 
- name: Changbai Li
  avatar: img/headshots/changbai.jpg
  role: lead web developer
- name: Cristian Trout
  avatar: img/headshots/christian.png
  role: created the look of the game
- name: Daniel Kokotajlo
  avatar: img/headshots/daniel.png
  role: envisions the game
- name: iris holloway
  avatar: img/headshots/iris (official).png
  role: lead game designer
- name: Karl von Wendt
  avatar: img/headshots/karl.png
  role: 
contributors:
- name: Eugene Lin
  avatar: img/headshots/default.png
  role: web developer
- name: Jan Dornig
  avatar: img/headshots/jan.jpg
  role: UX consultant
- name: TJ Smith
  avatar: img/headshots/tj.png
  role: helped set some early core design principles

---

<h2 class="highlighter-pink active">Contact Us</h2>

Want to get in touch with the team behind The Treacherous Turn? We'd love to hear from you! Our outreach email is **info@thetreacherousturn.ai**, and we'll do our best to respond to any questions or comments you might have.

<h3 class="highlighter-red">Created by</h3>
<div class="members">
  <div v-for="member in $page.frontmatter.core_members">
    <figure>
      <img :src="member.avatar" :alt="member.name">
      <figcaption>
        <span class="member-name">{{member.name}}</span>
        <span>{{member.role}}</span>
      </figcaption>
    </figure>
  </div>
</div>

<h3 class="highlighter-red">Significant contributions by</h3>
<div class="members">
  <div v-for="member in $page.frontmatter.contributors">
    <figure>
      <img :src="member.avatar" :alt="member.name">
      <figcaption>
        <span class="member-name">{{member.name}}</span>
        <span class="member-role">{{member.role}}</span>
      </figcaption>
    </figure>
  </div>
</div>

