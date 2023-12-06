<script>
	// @ts-nocheck

	import PdfViewer from 'svelte-pdf';
	import doc from '../../../assets/docs/OUR_T&C.pdf';
</script>

<PdfViewer url={doc} showBorder="false" />
