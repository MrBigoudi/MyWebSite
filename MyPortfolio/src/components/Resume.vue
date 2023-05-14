<script>
  import pdfjs from 'pdfjs-dist'

  export default {
    mounted() {
      const container = this.$refs.pdfViewer
      const url = '@/assets/pdfs/resume.pdf'
      
      pdfjs.getDocument(url).promise.then(pdf => {
        pdf.getPage(1).then(page => {
          const scale = 1.5
          const viewport = page.getViewport({scale: scale})
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')
          canvas.height = viewport.height
          canvas.width = viewport.width

          const renderContext = {
            canvasContext: context,
            viewport: viewport
          }

          page.render(renderContext).promise.then(() => {
            container.appendChild(canvas)
          })
        })
      })
    }
  }
</script>

<template>
  <section id="resume">
    <div ref="pdfViewer"></div>
  </section>
</template>