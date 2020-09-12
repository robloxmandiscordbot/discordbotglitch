{
  // Required
  "app": {
    "background": {
      // Optional
      "scripts": ["background.js"]
    }
  },
  "manifest_version": 2,
  "name": "My App",
  "version": "versionString",

  // Recommended
  "default_locale": "en",
  "description": "A plain text description",
  "icons": {...},

  // Optional
  "action_handlers": ["new_note"],
  "author": Jacob,
  "automation": .false,
  "bluetooth": {
    "uuids": ["1105", "1006"]
  },
  "commands": {command123},
  "current_locale": ...,
  "differential_fingerprint": ...,
  "event_rules": [{...}],
  "externally_connectable": {
    "matches": ["*Https://lizard-chisel-ringer.glitch.me/*"]
  },
  "file_handlers": {...},
  "file_system_provider_capabilities": {
    "configurable": true,
    "multiple_mounts": true,
    "source": "network"
  },
  "import": [{"id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}],
  "key": "publicKey",
  "kiosk": {
    "always_update": ...,
    "required_platform_version": ...
  },
  "kiosk_enabled": true,
  "kiosk_only": true,
  "kiosk_secondary_apps": ...,
  "minimum_chrome_version": "versionString",
  "nacl_modules": [...],
  "oauth2": "discord.com/api/oauth2/authorize?client_id=754142346186195026&permissions=0&scope=bot",
  "offline_enabled": true,
  "optional_permissions": ["tabs"],
  "permissions": ["tabs"],
  "platforms": ...,
  "replacement_android_app": ...,
  "replacement_web_app": ...,
  "requirements": {...},
  "sandbox": [...],
  "short_name": "Short Name",
  "signature": ...,
  "sockets": {
    "tcp": {
      "connect": "*"
    },
    "udp": {
      "send": "*"
    }
  },
  "storage": {
    "managed_schema": "schema.json"
  },
  "system_indicator": ...,
  "update_url": "http://path/to/updateInfo.xml",
  "url_handlers": {...},
  "usb_printers": {
    "filters": [...]
  },
  "version_name": "aString",
  "webview": {...}
}
                  
        Client.active=true
                    .env=true
                      Name.Console
                    Console.log("Bot Offline")
                      Token="NzU0MTQyMzQ2MTg2MTk1MDI2.X1wbyg.vQMTS_z6JLzlZ0sQfZNyD049E4k"
                        ClientBot.js=Active=true
                  