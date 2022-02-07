<template>
	<div class="navbar-fixed no-height">
		<nav class="nav-menu">
			<div class="nav-wrapper">
				<ul class="lang-select right">
					<li v-for="lang in $i18n.locales">
						<nuxt-link
							v-if="lang.code != $i18n.locale"
							:to="switchLocalePath(lang.code)">
							{{ lang.code }}
						</nuxt-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
// .lang-select diventa dropdown con più di 2/3 lingue
export default {
	name: 'Menu'
}
</script>
