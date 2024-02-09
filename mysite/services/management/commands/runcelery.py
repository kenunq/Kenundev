import os
import shlex
import signal
import subprocess
import sys

import psutil
from decouple import config
from django.core.management.base import BaseCommand
from django.utils import autoreload


class Command(BaseCommand):
    """Команда для запуска celery + celery flower"""

    def get_main_process(self) -> set[int]:
        """
        Возвращает список pid активных celery процессов (если они есть).
        """
        processes_pids = set()
        for process in psutil.process_iter():
            ppid = process.ppid()
            if ppid == 0:
                continue
            try:
                parent = psutil.Process(ppid)
            except psutil.NoSuchProcess:
                pass
            else:
                if process.name() == 'python.exe' and parent.name() == 'celery.exe':
                    processes_pids.add(process.pid)
                    processes_pids.add(parent.pid)
            return processes_pids

    def kill_celery_processes(self, processes_pids: set[int]):
        """
        Убивает celery процесс(ы).
        """
        if sys.platform == "win32":
            if self.options['debug']:
                subprocess.call(shlex.split("TASKKILL /F /T /IM celery.exe"))
            else:
                subprocess.call(
                    shlex.split("TASKKILL /F /T /IM celery.exe"),
                    stdin=subprocess.PIPE, stderr=subprocess.PIPE, stdout=subprocess.PIPE
                )
        else:
            subprocess.call(shlex.split("pkill celery"))
            # for pid in processes_pids:
            #     os.kill(pid, signal.SIGTERM)

    def run_celery_and_flower(self):
        worker = subprocess.Popen(
            shlex.split(f"celery -A {config('PROJECT_NAME')} worker -l info -P gevent"),
            stdin=subprocess.PIPE, stderr=subprocess.STDOUT
        )

        flower = subprocess.Popen(
            shlex.split(f"celery -A {config('PROJECT_NAME')} flower --port=5555 --url_prefix={config('CELERY_FLOWER_URL_PREFIX')} -P gevent"),
            stdin=subprocess.PIPE, stderr=subprocess.STDOUT, stdout=subprocess.PIPE
        )

        beat = subprocess.Popen(
            shlex.split(f"celery -A {config('PROJECT_NAME')} beat"),
            stdin=subprocess.PIPE, stderr=subprocess.STDOUT
        )

    def reload_celery(self):
        self.kill_celery_processes(self.get_main_process())
        self.run_celery_and_flower()

    def handle(self, *args, **options):
        # autoreload.run_with_reloader(self.reload_celery)
        self.reload_celery()
