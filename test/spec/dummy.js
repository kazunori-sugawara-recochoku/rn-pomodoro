import assert from 'assert'
import common from '../lib/common'
const {
    React,
    MockComponents,
    setup,
} = common
const {
    View,
    Text,
} = MockComponents

function DumbComponent() {
    return (
      <View>
        <Text>foo</Text>
      </View>
    )
}

describe('dummy', function () {
    it('dummy', function () {
        const { output } = setup((
          <DumbComponent />
        ))
        assert(output.type.displayName === 'View')
        assert(output.props.children.type.displayName === 'Text')
        assert(output.props.children.props.children === 'foo')
    })
})
