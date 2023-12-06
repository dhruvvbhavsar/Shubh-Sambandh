<script>
	// @ts-nocheck

	import PdfViewer from 'svelte-pdf';
	import doc from '../../../assets/docs/Our_privacy_policy.pdf';
</script>

<PdfViewer url={doc} showBorder="false" />
