import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./routeWithLayout";
import { MainLayout, AuthLayout } from "../layout";

import {
  SignUp as SignUpPage,
  SignIn as SignInPage,
  ForgotPassword as ForgotPasswordPage,
  ResetPassword as ResetPasswordPage,
  VerifyBrand as VerifyBrandPage
} from "../../pages/auth";

import {
  Dashboard as DashboardPage,
  Account as AccountPage,
  Customers as CustomersPage,
  ProductList as ProductListPage,
  OrderList as OrderListPage,
  OrderDetail as OrderDetailPage,
  Wallet as WalletPage,
  Analytics as AnalyticsPage,
  Setting as SettingPage,
  NotFound as NotFoundPage,
  NewProduct as NewProductPage
} from "../../pages";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        component={SignUpPage}
        exact
        layout={AuthLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInPage}
        exact
        layout={AuthLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={ForgotPasswordPage}
        exact
        layout={AuthLayout}
        path="/forgot-password"
      />
      <RouteWithLayout
        component={VerifyBrandPage}
        exact
        layout={AuthLayout}
        path="/verify-brand"
      />
      <RouteWithLayout
        component={ResetPasswordPage}
        exact
        layout={MainLayout}
        path="/reset-password"
      />
      <RouteWithLayout
        component={DashboardPage}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={AccountPage}
        exact
        layout={MainLayout}
        path="/account"
      />
      {/* <RouteWithLayout
        component={CustomersPage}
        exact
        layout={MainLayout}
        path="/customers"
      /> */}
      <RouteWithLayout
        component={ProductListPage}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={NewProductPage}
        exact
        layout={MainLayout}
        path="/new-product"
      />
      <RouteWithLayout
        component={OrderListPage}
        exact
        layout={MainLayout}
        path="/orders"
      />
      <RouteWithLayout
        component={OrderDetailPage}
        exact
        layout={MainLayout}
        path="/order-details"
      />
      <RouteWithLayout
        component={WalletPage}
        exact
        layout={MainLayout}
        path="/wallet"
      />
      <RouteWithLayout
        component={AnalyticsPage}
        exact
        layout={MainLayout}
        path="/analytics"
      />
      <RouteWithLayout
        component={SettingPage}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={NotFoundPage}
        exact
        layout={AuthLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
