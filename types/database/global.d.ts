// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {Model} from '@nozbe/watermelondb';
export default class Global extends Model {
    static table: string;
    name: string;
    value: string[];
}
