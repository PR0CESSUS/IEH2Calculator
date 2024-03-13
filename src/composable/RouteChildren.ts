import { useRoute, useRouter } from "vue-router";

export function useRouteChildren(withDefault: boolean = false) {
  const router = useRouter();
  const routes = router.getRoutes();
  const currentRoute = useRoute();

  const children = routes.filter((route) => (withDefault ? route.path == currentRoute.path : route.path == currentRoute.path && !route.meta.default))[0].children;

  return withDefault ? children : children.filter((route) => !route.meta.default);
}
