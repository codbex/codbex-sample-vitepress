---
layout: home

hero:
  text: About
  tagline: Who we are, what do we provide and what it is for you?
features:
  - title: Who we are?
    details: codbex is an innovative and dynamic technology company that specializes in providing software solutions to businesses in a variety of industries. We at codbex put our customers’ satisfaction first - our aspiration is to be a trusted partner for companies that want to use the full potential of their assets and drive sustainable success in an increasingly competitive digital environment.
  - title: What do we provide?
    details: codbex offers an unique high-productivity application platform foundation for our partner’s network to design and develop vertical industry solutions based on the variety of open source technologies and open standards, and deliver them to customers on any hyperscaler as well as on-premises. Our leading offerings include advanced database management systems, reliable business process integration tools, and customized software solutions designed to improve business productivity.
  - title: What is it for you?
    details: Developers need a platform providing powerful tooling, scallable infrastructure and a huge number of reusable components. Enterprises looking for a modern, extendable and secure cloud applications for their specific business needs. Vendors want to build solutions tailored for specific customer’s needs by combining ready to use components. Resellers want to expand their products and services portfolio by promoting and reselling vertical industry solutions.

editLink: false

title: Who we are?
---

<script setup>
import {
  VPTeamMembers,
} from 'vitepress/theme';

const members = [
  {
    name: 'Atanas Himchev',
    title: 'CSO',
    avatar: 'https://www.codbex.com/images/staff/atanas.jpg',
    links: [
      { icon: 'github', link: 'https://github.com/himchev/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/atanas-himchev-a4a9114/' }
    ]
  },
  {
    name: 'Boris Nenchovski',
    title: 'Platform',
    avatar: 'https://www.codbex.com/images/staff/boris.jpg',
    links: [
      { icon: 'github', link: 'https://github.com/BorisNen/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/boris-n-b27b19195/' }
    ]
  },
  {
    name: 'Desislava Rasheva',
    title: 'Legal Advisor',
    avatar: 'https://www.codbex.com/images/staff/desislava.jpg',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dessislava-rasheva-pavlova-ab1a9a107/' }
    ]
  },
  {
    name: 'Dimitar Velev',
    title: 'Blockchain',
    avatar: 'https://www.codbex.com/images/staff/dimitar.jpg',
    links: [
      { icon: 'github', link: 'https://github.com/d-velev/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/d-velev/' }
    ]
  },
  {
    name: 'Emil Momchev',
    title: 'Student',
    avatar: 'https://www.codbex.com/images/staff/emil.jpg',
    links: [
      { icon: 'github', link: 'https://github.com/Mrgoblings/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/emil-momchev/' }
    ]
  },
  {
    name: 'Iliyan Velichkov',
    title: 'Java',
    avatar: 'https://www.codbex.com/images/staff/iliyan.png',
    links: [
      { icon: 'github', link: 'https://github.com/iliyan-velichkov/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/iliyan-velichkov/' }
    ]
  },
  {
    name: 'Ivo Yakov',
    title: 'IoT',
    avatar: 'https://www.codbex.com/images/staff/ivo.jpg',
    links: [
      { icon: 'github', link: 'https://github.com/Fluctuationqt' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/ivo-yakov-9681b9226/' }
    ]
  },
  {
    name: 'Mimi Delcheva',
    title: 'Marketing',
    avatar: 'https://www.codbex.com/images/staff/mimi.jpg',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mimi-delcheva-998b12231/' }
    ]
  },
  {
    name: 'Mina Doncheva',
    title: 'Developer',
    avatar: 'https://www.codbex.com/images/staff/mina.jpg',
    links: [
      { icon: 'github', link: 'https://github.com/MinaDoncheva' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mina-doncheva-136594183/' }
    ]
  },
  {
    name: 'Nedelcho Delchev',
    title: 'CEO',
    avatar: 'https://www.codbex.com/images/staff/nedelcho.jpg',
    links: [
      { icon: 'github', link: 'https://github.com/delchev' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nedelcho-delchev-67089421/' }
    ]
  },
  {
    name: 'Nedelcho Delchev Jr.',
    title: 'Applications',
    avatar: 'https://www.codbex.com/images/staff/nedelchojr.jpg',
    links: [
      { icon: 'github', link: 'https://github.com/nedelcho-delchev-tues' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nedelcho-delchev/' }
    ]
  },
  {
    name: 'Stan Genchev',
    title: 'UX',
    avatar: 'https://www.codbex.com/images/staff/stan.jpg',
    links: [
      { icon: 'github', link: 'https://github.com/StanZGenchev' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/stan-genchev/' }
    ]
  },
  {
    name: 'Tomislav Ivanov',
    title: 'Student',
    avatar: 'https://www.codbex.com/images/staff/tomi.jpg',
    links: [
      { icon: 'github', link: 'https://github.com/TIVMOF' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/tomy-ivanov-1b0224289/' }
    ]
  },
  {
    name: 'Vladimir Mutafov',
    title: 'Research',
    avatar: 'https://www.codbex.com/images/staff/vladimir.jpg',
    links: [
      { icon: 'github', link: 'https://github.com/vmutafov' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/vladimir-mutafov-a84055114/' }
    ]
  },
  {
    name: 'Yordan Pavlov',
    title: 'CTO',
    avatar: 'https://www.codbex.com/images/staff/yordan.jpg',
    links: [
      { icon: 'github', link: 'https://github.com/ThuF' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/jordan-pavlov/' }
    ]
  }
]
</script>

<br/><br/>

# Our Team
    
Our team consists of skilled professionals and experts, with an eye for innovation, who use the latest technologies and methodologies to deliver solutions that exceed expectations.


  <VPTeamMembers :members="members"/>


<style scope>
  @media (min-width: 640px) {
    .lead[data-v-f3b658bb] {
      text-align: left;
      max-width: 100%;
    }
  }

  @media (min-width: 960px) {
    .lead[data-v-f3b658bb] {
      text-align: left;
      max-width: 80%;
    }
  }

  @media (min-width: 1280px) {
    .lead[data-v-f3b658bb] {
      text-align: left;
      max-width: 60%;
    }
  }
</style>
