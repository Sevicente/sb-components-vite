import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = { //Creación del componente para Storybook

    title:'UI/labels/MyLabel',//Localización en carpetas de mi componente
    component: MyLabel, //Componente
    tags:['autodocs'],//Añadir documentación a nuestro componente
    parameters:{
        layout:'centered' //Centrar componente en Storybook
    },
    argTypes:{
        size:{control: 'inline-radio'},
        fontColor:{control:'color'}
    }

} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args:{
        label:'Basic label',
        

        
    }

}
export const AllCaps: Story = {
    args:{
        label:'AllCaps label',
        allCaps:true,
    }

}
export const Secondary: Story = {
    args:{
        label:'Secondary label',
        color:'text-secondary'
    }

}

export const CustomColor: Story = {
    args:{
        label:'CustomColor label',
        fontColor:'#5517ac'
    }

}