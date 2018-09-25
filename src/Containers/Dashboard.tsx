import * as React from 'react'

import { Grid } from 'semantic-ui-react'
import Query from '../Components/Query'

export default class Dashboard extends React.Component<any, any>{
    public render(): JSX.Element {
        return <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Query />
                </Grid.Column>
                <Grid.Column>
                    <Query />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3}>
                <Grid.Column>
                    <Query />
                </Grid.Column>
                <Grid.Column>
                    <Query />
                </Grid.Column>
                <Grid.Column>
                    <Query />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }
}