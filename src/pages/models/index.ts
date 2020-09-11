import { Action, Effect, Reducer } from '@/interfaces/types';
/**
 * namespace:
 *
 * 限制使用dispatch调用该文件方法时，必须按如下格式
 *
 * dispatch({
      type: '/main/setName',
      payload: { name: '啊哈哈' },
    });
 */

export const namespace = '/main';

export const currentState = (_: any) => _[namespace];

// 可操作方法
export enum ActionType {
  setName = 'setName',
  orList = 'orList',
  setTab = 'setTab',
}
// 操作方法入参
interface Payload {
  [ActionType.setName]: {name: string},
  [ActionType.orList]: {id:number},
  [ActionType.setTab]: {tab:number},
}

// 默认公共变量类型
export interface State {
  name:string,
  tab: number
}
// 默认公共变量
const initalState: State = {
  name:'',
  tab: 1
}
// 操作的reducer,获取、设置state的值
const reducers: Partial<Record<ActionType, Reducer<State>>> = {
  [ActionType.setName](state, { payload }:Action<Payload[ActionType.setName]>) {
    state.name = payload.name ? payload.name : '';
  },
  [ActionType.setTab](state, { payload }:Action<Payload[ActionType.setTab]>) {
    state.tab = payload.tab;
  }
}
// 操作的effects，把部分业务逻辑封装到redux中,如执行删除订单操作等
const effects: Partial<Record<ActionType, Effect>> = {
  *[ActionType.orList]({payload}: Action<Payload[ActionType.orList]>, { select, call, put }) {
    const { id } = payload;
    let state:State = yield select(currentState)
    console.log(id, state);
  }
}

export default {
  namespace,
  state: initalState,
  effects,
  reducers,
};
