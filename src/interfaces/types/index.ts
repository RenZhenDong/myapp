import { DispatchProp } from 'react-redux';
import { RouterTypes } from 'umi';
import { EffectsCommandMap } from 'dva';
import { AnyAction } from 'redux';
import * as H from 'history';

/**
 * 类型互斥
 *
 * @url https://zhuanlan.zhihu.com/p/82459341
 * @url https://github.com/Microsoft/TypeScript/issues/14094#issuecomment-373782604
 *
 * @example
 * ```typescript
 * interface A { a: string }
 * interface B { b: string }
 * interface C { c: number, d: string }
 * interface D { c: number, d: string }
 * type AorB = XOR<A, B>
 * type AorBorC = XOR<A, XOR<B, C>>
 * type CorD = XOR<C, D>
 *
 * const var1: AorB = { a: '' } // pass
 * const var2: AorB = { a: '', b: '' } // error
 * const var3: AorB = { a: '', c: '' } // error
 * const var4: AorBorC = { a: '', c: '' } // error
 * const var5: CorD = { c: '', d: '' } // error
 * ```
 */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

export type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

/**
 * 路由组件
 * 提供 route 属性声明
 */
export type RouteComponentPropsType<T = {}> = RouterTypes<{ title: string }> & T;

export interface ILocation<T> extends H.Location {
  query?: T & {};
}

/**
 * connect 组件声明
 * @param T 泛型类型，通常是组件自定的 StateToProp
 */
export type ConnectComponentType<T = {}> = T & DispatchProp;

/**
 * 路由组件并且被 connect 的组件类型声明
 * 提供 dispatch 的使用声明
 * @param T 泛型，通常是组件自己的 StateProps 接口声明
 */
export type RouteConnectComponentType<T = {}> = RouteComponentPropsType<{}> &
  ConnectComponentType<T>;

export interface Action<T extends any = any> extends AnyAction {
  payload: T;
}

export type Effect = <A extends Action = Action>(action: A, effects: EffectsCommandMap) => void;
export type Reducer<S = any, A extends Action = Action> = (state: S, action: A) => void;
