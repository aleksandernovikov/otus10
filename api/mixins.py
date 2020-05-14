class DefaultMixin:

    def get_permissions(self):
        """
        Получение прав пользователя на объект

        :return: list of permissions
        """
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except (KeyError, AttributeError):
            return [permission() for permission in self.permission_classes]
