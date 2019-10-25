
const objectAssign = require('object-assign')
const getImageUrl = require('@sanity/block-content-to-hyperscript/lib/getImageUrl')
const blocksToNodes = require('@sanity/block-content-to-hyperscript/lib/blocksToNodes')
const getSerializers = require('@sanity/block-content-to-hyperscript/lib/serializers')

const renderNode = (serializer, properties, children) => {
  const props = properties || {}
  if (typeof serializer === 'function') {
    return serializer(objectAssign({}, props, { children }))
  }

  const tag = serializer
  const childNodes = props.children || children
  return { tag, props, childNodes }
}

const { defaultSerializers, serializeSpan } = getSerializers(renderNode, { useDashedStyles: true })

const blockContentToNodes = options => {
  return blocksToNodes(renderNode, options, defaultSerializers, serializeSpan)
}

// Expose default serializers to the user
blockContentToNodes.defaultSerializers = defaultSerializers

// Expose logic for building image URLs from an image reference/node
blockContentToNodes.getImageUrl = getImageUrl

// Expose node renderer
blockContentToNodes.renderNode = renderNode

export default blockContentToNodes