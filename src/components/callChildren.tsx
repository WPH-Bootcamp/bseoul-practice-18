import React from "react";
import { GreetingWithFunction } from "./functionalComponent";

type ParentProps = {
    name: string;
}

export class ParentComponent extends React.Component<ParentProps> {
    render() {
        return(
        <div>
            <GreetingWithFunction name="Taufik"/>
        </div>
        )
    }
}