export default {
  methods: {
    getLocationId(lat, lng) {
      return lat + '-' + lng
    },

    getSimpleMapLocationPointDataBlock(coordinates) {
      return {
        id: coordinates?.y + '-' + coordinates?.x,
        lat: coordinates.y || 0,
        lng: coordinates.x || 0,
        geometry: {
          type: 'Point',
          coordinates: [coordinates.x, coordinates.y],
        },
        properties: {},
        smetadata: {},
        type: 'Feature',
      }
    },

    copyToClipboard(text) {
      const textArea = document.createElement('textarea')

      // Place in top-left corner of screen regardless of scroll position.
      textArea.style.position = 'fixed'
      textArea.style.top = 0
      textArea.style.left = 0

      // Ensure it has a small width and height. Setting to 1px / 1em
      // doesn't work as this gives a negative w/h on some browsers.
      textArea.style.width = '2em'
      textArea.style.height = '2em'

      // We don't need padding, reducing the size if it does flash render.
      textArea.style.padding = 0

      // Clean up any borders.
      textArea.style.border = 'none'
      textArea.style.outline = 'none'
      textArea.style.boxShadow = 'none'

      // Avoid flash of white box if rendered for any reason.
      textArea.style.background = 'transparent'

      textArea.value = text

      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      try {
        document.execCommand('copy')
      } catch (err) {
        // Nothing to do
      }

      document.body.removeChild(textArea)
    },
  },
}
