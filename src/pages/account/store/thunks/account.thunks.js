import * as accountActions from "../actions/";
import * as accountService from "../../../../service/";

export function createAccountThunk(data) {
  console.log("create account thunk");
  return async dispatch => {
    dispatch(accountActions.createAccountRequest());
    try {
      const newAccount = await accountService.createAccount(data);
      dispatch(accountActions.createAccountSuccess(newAccount));
    } catch (error) {
      dispatch(accountActions.createAccountFailure(error));
    }
  };
}

export function listAccountThunk(data) {
  console.log("list account thunk");
  return async dispatch => {
    dispatch(accountActions.listAccountRequest());
    try {
      const listAccount = await accountService.readAllAccounts(data);
      dispatch(accountActions.listAccountSuccess(listAccount));
    } catch (error) {
      dispatch(accountActions.listAccountFailure(error));
    }
  };
}

export function detailAccountThunk(id) {
  console.log("detail account thunk");
  return async dispatch => {
    dispatch(accountActions.detailsAccountRequest());
    try {
      const detailAccount = await accountService.readOneAccount(id);
      dispatch(accountActions.detailsAccountSuccess(detailAccount));
    } catch (error) {
      dispatch(accountActions.detailsAccountFailure(error));
    }
  };
}

export function updateAccountThunk(id) {
  console.log("update account thunk");
  return async dispatch => {
    dispatch(accountActions.updateAccountRequest());
    try {
      const updateAccount = await accountService.updateAccount(id);
      dispatch(accountActions.updateAccountSuccess(updateAccount));
    } catch (error) {
      dispatch(accountActions.updateAccountFailure(error));
    }
  };
}

export function removeAccountThunk(id) {
  console.log("remove account thunk");
  return async dispatch => {
    dispatch(accountActions.removeAccountRequest());
    try {
      const removedAccount = await accountService.removeAccount(id);
      dispatch(accountActions.removeAccountSuccess(removedAccount));
    } catch (error) {
      dispatch(accountActions.removeAccountFailure(error));
    }
  };
}

export function disableAccountThunk(id) {
  console.log("disable account thunk");
  return async dispatch => {
    dispatch(accountActions.disableAccountRequest());
    try {
      const disabledAccount = await accountService.disableAccount(id);
      dispatch(accountActions.disableAccountSuccess(disabledAccount));
    } catch (error) {
      dispatch(accountActions.disableAccountFailure(error));
    }
  };
}

export function enableAccountThunk(id) {
  console.log("enable account thunk");
  return async dispatch => {
    dispatch(accountActions.enableAccountRequest());
    try {
      const enabledAccount = await accountService.enableAccount(id);
      dispatch(accountActions.enableAccountSuccess(enabledAccount));
    } catch (error) {
      dispatch(accountActions.enableAccountFailure(error));
    }
  };
}
