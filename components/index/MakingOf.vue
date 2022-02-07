<template>

	<div id="making-of" class="heroPanel2 full-height with-shadow special-shadow dark-shadow centered white-text">
		<video ref="video" class="background"
			:title="$t('makingOf.background-alt')"
			async="" autoplay="" loop="" muted="" poster="">
			<source src="assets/video/index/speedrun-painting-rogh.mp4" type="video/mp4">
		</video>
	    <div class="panel-content">
	        <div class="center-align">
	            <p class="coming-soon dark-shadow-highlight">
					<b>More</b>
					<br />
					Coming Soon
	            </p>
	        </div>
	    </div>
	</div>
</template>

<script>
export default {
	name: 'MakingOf',
	mounted(){
		this.$refs["video"].playbackRate = 0.5;
	}
}
</script>
