<template lang="pug">
nav.pa3.pa4-ns
  nuxt-link.link.dim.gray.f6.f5-ns.dib.mr3(exact to='/' title='Home') Home
  nuxt-link.link.dim.gray.f6.f5-ns.dib.mr3(to='/counter' title='Counter') Counter
  nuxt-link.link.dim.gray.f6.f5-ns.dib.mr3(to='/todo' title='Todo') Todo
  nuxt-link.link.dim.gray.f6.f5-ns.dib.mr3(to='/active' title='Active') Active
  nuxt-link.link.dim.gray.f6.f5-ns.dib.mr3(to='/completed' title='Completed') Completed
</template>

<style>
a.nuxt-link-active {
  color: PapayaWhip;
}
</style>
