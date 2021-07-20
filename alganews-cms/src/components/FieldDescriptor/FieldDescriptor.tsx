import * as FD from './FieldDescriptor.styles'

export interface FieldDescriptorProps {
    field: string
    value: React.ReactNode
}

export default function FieldDescriptor(props: FieldDescriptorProps) {

    return <FD.Wrapper>
        <FD.Field>{ props.field }:</FD.Field>
        <FD.Value>{props.value}</FD.Value>
    </FD.Wrapper>

}
