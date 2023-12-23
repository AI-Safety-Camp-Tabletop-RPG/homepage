---
layout: Contact
title: Contact
email: info@thetreacherousturn.ai
main_team:
- name: Aemilia Dixon
  avatar: img/headshots/emily.jpg
  role: project manager
  link: mailto:aemiliadixon@gmail.com
  link_icon: icons/mail.svg
- name: Changbai Li
  avatar: img/headshots/changbai.jpg
  role: lead web developer
  link: https://changbai.li/
  link_icon: icons/www.svg
- name: Daniel Kokotajlo
  avatar: img/headshots/daniel.png
  role: ai expert & mentor
- name: iris holloway
  avatar: img/headshots/iris (official).png
  role: lead game designer
  link: https://iris-lemony.itch.io/
  link_icon: icons/itch.svg
- name: Lillie Hale
  avatar: img/headshots/lillie.png
  role: layout and graphic designer
  link: mailto:athesiel@gmail.com
  link_icon: icons/mail.svg
early_contributors:
- name: Berbank Green
  avatar: img/headshots/berbank.png
  role: game design consultant
- name: Cristian Trout
  avatar: img/headshots/christian.png
  role: graphic designer
- name: Karl von Wendt
  avatar: img/headshots/karl.png
  role: narrative consultant
additional_contributors:
- name: Cassandra Grotenhuis
  avatar: img/headshots/cassandra.png
  role: editor
- name: Eugene Lin
  avatar: img/headshots/default.png
  role: web developer
- name: Jan Dornig
  avatar: img/headshots/jan.jpg
  role: UX consultant

---

<h2 class="highlighter-pink active">Contact Us</h2>

Want to get in touch with the team behind The Treacherous Turn? We'd love to hear from you! Our outreach email is **info@thetreacherousturn.ai**, and we'll do our best to respond to any questions or comments you might have.

<h3 class="highlighter-red">Main Team</h3>
<div class="members">
  <Member v-for="member in $page.frontmatter.main_team" :member='member' />
</div>

<h3 class="highlighter-red">Early Contributors</h3>
<div class="members">
  <Member v-for="member in $page.frontmatter.early_contributors" :member='member' />
</div>

<h3 class="highlighter-red">Additional Contributors</h3>
<div class="members">
  <Member v-for="member in $page.frontmatter.additional_contributors" :member='member' />
</div>

