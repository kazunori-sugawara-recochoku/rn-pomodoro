import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { MockComponents } from './mocks/react-native'

function setup(jsx) {
    const renderer = ReactTestUtils.createRenderer()
    renderer.render(jsx)
    const output = renderer.getRenderOutput()
    return {
        output,
        renderer,
    }
}

export default {
    createRenderer: ReactTestUtils.createRenderer,
    React,
    MockComponents,
    setup,
}
