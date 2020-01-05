import axios, { AxiosResponse } from 'axios'

import Group from '../interfaces/group'

const GROUPS_URL = '/api/groups'

export default class ApiClient {

  add_group(group: Group) {
    return axios.post(GROUPS_URL, group)
  }

  groups(): Promise<AxiosResponse<any>> {
    console.log("in apiClient.getGroups")
    return axios.get(GROUPS_URL);
  }
}