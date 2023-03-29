---
layout: Contact
title: Contact
email: info@thetreacherousturn.ai
core_members:
- name: Aemilia Dixon
  avatar: img/headshots/emily.jpg
  role: project manager
  link: mailto:aemiliadixon@gmail.com
  link_icon: icons/mail.svg
- name: Berbank Green
  avatar: img/headshots/berbank.png
  role: game design consultant
- name: Changbai Li
  avatar: img/headshots/changbai.jpg
  role: lead web developer
  link: https://changbai.li/
  link_icon: icons/www.svg
- name: Cristian Trout
  avatar: img/headshots/christian.png
  role: lead graphic designer
- name: iris holloway
  avatar: img/headshots/iris (official).png
  role: lead game designer
  link: https://iris-lemony.itch.io/
  link_icon: icons/itch.svg
- name: Karl von Wendt
  avatar: img/headshots/karl.png
  role: narrative consultant
contributors:
- name: Cassandra Grotenhuis
  avatar: img/headshots/cassandra.png
  role: editor
- name: Daniel Kokotajlo
  avatar: img/headshots/daniel.png
  role: ai expert & mentor
- name: Eugene Lin
  avatar: img/headshots/default.png
  role: web developer
- name: Jan Dornig
  avatar: img/headshots/jan.jpg
  role: UX consultant
- name: TJ Smith
  avatar: img/headshots/tj.png
  role: designer

---

<h2 class="highlighter-pink active">Contact Us</h2>

Want to get in touch with the team behind The Treacherous Turn? We'd love to hear from you! Our outreach email is **info@thetreacherousturn.ai**, and we'll do our best to respond to any questions or comments you might have.

<h3 class="highlighter-red">Created by</h3>
<div class="members">
  <Member v-for="member in $page.frontmatter.core_members" :member='member' />
</div>

<h3 class="highlighter-red">Significant contributions by</h3>
<div class="members">
  <Member v-for="member in $page.frontmatter.contributors" :member='member' />
</div>

